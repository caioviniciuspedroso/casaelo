import * as THREE from './assets/three.module.min.js';

const section=document.querySelector('.craft');
const canvas=document.querySelector('#atelier-canvas');
const host=canvas.parentElement;
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
const caption=document.querySelector('#craft-caption');
const hint=document.querySelector('#craft-hint');
let renderer,frame=0,active=false,visible=false,disposed=false,progress=0,last=0;
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));

try{
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
  renderer.setClearColor(0x101914,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(36,1,.1,70);
  const stage=new THREE.Group();scene.add(stage);
  const envScene=new THREE.Scene();envScene.background=new THREE.Color(0x303c30);
  const envBox=new THREE.Mesh(new THREE.BoxGeometry(20,20,20),new THREE.MeshBasicMaterial({color:0x63695d,side:THREE.BackSide}));envScene.add(envBox);
  [[-4,6,3,7,3],[5,4,1,3,7],[0,5,-6,8,2]].forEach(([x,y,z,w,h])=>{const plane=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2.8,2.4),side:THREE.DoubleSide}));plane.position.set(x,y,z);plane.lookAt(0,1,0);envScene.add(plane);});
  const pmrem=new THREE.PMREMGenerator(renderer);const env=pmrem.fromScene(envScene,.08);scene.environment=env.texture;pmrem.dispose();envScene.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
  scene.add(new THREE.HemisphereLight(0xf7ecd3,0x1a3023,1.4));
  const key=new THREE.DirectionalLight(0xffecc2,4.5);key.position.set(-3,7,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-7;key.shadow.camera.right=7;key.shadow.camera.top=7;key.shadow.camera.bottom=-7;key.shadow.normalBias=.035;scene.add(key);
  const rim=new THREE.DirectionalLight(0xadcdd0,3.5);rim.position.set(4,3,-4);scene.add(rim);
  const gold=new THREE.MeshStandardMaterial({color:0xd7a349,metalness:1,roughness:.23});
  const brass=new THREE.MeshStandardMaterial({color:0xb9a065,metalness:.88,roughness:.31});
  const steel=new THREE.MeshStandardMaterial({color:0xabb9b2,metalness:1,roughness:.23});
  const dark=new THREE.MeshStandardMaterial({color:0x18221c,metalness:.35,roughness:.56});
  const stone=new THREE.MeshStandardMaterial({color:0x706b5e,roughness:.92});
  const mesh=(geo,mat,parent=stage)=>{const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  function rod(a,b,r1,r2,mat,parent=stage,segments=32){const d=new THREE.Vector3().subVectors(b,a);const o=mesh(new THREE.CylinderGeometry(r2,r1,d.length(),segments),mat,parent);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return o;}
  const floor=mesh(new THREE.PlaneGeometry(30,30),new THREE.ShadowMaterial({opacity:.25}));floor.rotation.x=-Math.PI/2;floor.position.y=-.28;
  const block=mesh(new THREE.BoxGeometry(4.8,.35,3.3),stone);block.position.set(-.3,-.08,0);block.rotation.y=-.13;
  const ringMaterial=gold.clone();ringMaterial.emissive=new THREE.Color(0xb33f08);
  const ring=mesh(new THREE.TorusGeometry(.68,.15,24,100),ringMaterial);ring.rotation.x=Math.PI/2;ring.position.set(-.4,.29,0);
  const innerBand=mesh(new THREE.TorusGeometry(.68,.052,16,100),gold);innerBand.rotation.x=Math.PI/2;innerBand.position.set(-.4,.43,0);
  // A slender solder wire and crossed tweezers give the demonstration a workshop scale.
  const wireCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(-2.3,.17,1),new THREE.Vector3(-1.65,.3,.8),new THREE.Vector3(-.9,.37,.15)]);
  mesh(new THREE.TubeGeometry(wireCurve,32,.012,8,false),steel);
  rod(new THREE.Vector3(1.2,.18,1.15),new THREE.Vector3(2.25,.25,-.4),.035,.018,steel);
  rod(new THREE.Vector3(1.4,.18,1.25),new THREE.Vector3(2.25,.25,-.4),.035,.018,steel);
  const torch=new THREE.Group();stage.add(torch);
  const handleA=new THREE.Vector3(3,3.9,.1),handleB=new THREE.Vector3(1.8,2.55,.1);
  rod(handleA,handleB,.22,.19,brass,torch,12);
  const grip=new THREE.MeshStandardMaterial({color:0x24382a,metalness:.15,roughness:.65});
  const unit=handleB.clone().sub(handleA).normalize();
  for(let i=0;i<10;i++){const center=handleA.clone().lerp(handleB,.14+i*.063);rod(center.clone().addScaledVector(unit,-.028),center.clone().addScaledVector(unit,.028),.232,.232,grip,torch);}
  rod(new THREE.Vector3(2.05,2.9,.1),new THREE.Vector3(2.05,3.12,.46),.06,.06,brass,torch);
  rod(new THREE.Vector3(2.05,3.1,.43),new THREE.Vector3(2.05,3.17,.52),.14,.14,dark,torch,12);
  const neckPoints=[handleB.clone(),new THREE.Vector3(1.5,2.25,.1),new THREE.Vector3(1.2,2.15,.08),new THREE.Vector3(.92,1.88,.04)];
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(neckPoints),36,.072,14,false),steel,torch);
  const tip=new THREE.Vector3(.76,1.67,.02);rod(neckPoints[3],tip,.13,.085,brass,torch);
  const aim=new THREE.Vector3(-.15,.38,0),direction=aim.clone().sub(tip).normalize();
  const mouth=mesh(new THREE.TorusGeometry(.065,.02,12,32),dark,torch);mouth.position.copy(tip);mouth.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),direction);
  const hoseCurve=new THREE.CatmullRomCurve3([handleA.clone(),new THREE.Vector3(3.5,4.1,.1),new THREE.Vector3(4.25,3.45,-.1),new THREE.Vector3(4.3,1.1,-1.1),new THREE.Vector3(3.7,-.1,-1.4)]);
  mesh(new THREE.TubeGeometry(hoseCurve,60,.095,12,false),dark);
  const flame=new THREE.Group();flame.position.copy(tip).addScaledVector(direction,.02);flame.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction);stage.add(flame);
  const flameMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0},uPower:{value:0},uColor:{value:new THREE.Color(0x159cff)}},vertexShader:`varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;uniform float uTime;void main(){vUv=uv;vec3 p=position;p.x+=sin(p.y*17.0-uTime*14.0)*0.012*p.y;p.z+=cos(p.y*21.0-uTime*12.0)*0.01*p.y;vec4 mv=modelViewMatrix*vec4(p,1.0);vView=-mv.xyz;vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}`,fragmentShader:`varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;uniform float uTime;uniform float uPower;uniform vec3 uColor;void main(){float edge=pow(abs(dot(normalize(vNormal),normalize(vView))),0.65);float flicker=0.88+0.12*sin(vUv.y*35.0-uTime*17.0);float alpha=edge*flicker*uPower*0.55;gl_FragColor=vec4(uColor*1.8,alpha);}`});
  const outer=mesh(new THREE.ConeGeometry(.19,1.48,40,12,true),flameMaterial,flame);outer.position.y=.74;outer.castShadow=false;
  const coreMaterial=flameMaterial.clone();coreMaterial.uniforms.uColor.value=new THREE.Color(0xb7f5ff);const core=mesh(new THREE.ConeGeometry(.073,.77,32,8,true),coreMaterial,flame);core.position.y=.385;core.castShadow=false;
  const flameLight=new THREE.PointLight(0x5dc9ff,0,4,2);flameLight.position.copy(tip).addScaledVector(direction,.35);stage.add(flameLight);
  const heatLight=new THREE.PointLight(0xff7024,0,3,2);heatLight.position.copy(aim).add(new THREE.Vector3(0,.2,0));stage.add(heatLight);
  let pointerX=0,pointerY=0;
  host.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&!motion.matches){const b=host.getBoundingClientRect();pointerX=(e.clientX-b.left)/b.width-.5;pointerY=(e.clientY-b.top)/b.height-.5;}});
  host.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;});
  function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;const mobile=window.innerWidth<=700;camera.position.set(mobile?6.1:6.7,mobile?5.8:5.2,mobile?9:9.4);camera.lookAt(.7,1.75,0);camera.updateProjectionMatrix();if(motion.matches)render(0);}
  function updateScroll(){if(disposed)return;const r=section.getBoundingClientRect();progress=motion.matches?.65:clamp(-r.top/Math.max(1,section.offsetHeight-window.innerHeight));section.style.setProperty('--progress',progress);const p=motion.matches?.85:clamp((progress-.12)/.35);section.dataset.flame=p>.1?'on':'off';caption.textContent=progress<.24?'Tudo começa com o cuidado.':progress<.72?'Precisão que dá forma.':'Um novo capítulo, feito à mão.';if(motion.matches){hint.textContent='O cuidado está em cada detalhe.';render(0);}else{hint.textContent='Continue rolando para acompanhar o ofício.';}}
  function render(time){if(disposed)return;const seconds=time*.001;const p=motion.matches?.85:clamp((progress-.12)/.35);flame.visible=p>.01;flame.scale.setScalar(Math.max(.001,p));flameMaterial.uniforms.uPower.value=p;coreMaterial.uniforms.uPower.value=p;flameMaterial.uniforms.uTime.value=motion.matches?0:seconds;coreMaterial.uniforms.uTime.value=motion.matches?0:seconds;flameLight.intensity=p*4;heatLight.intensity=p*3;ringMaterial.emissiveIntensity=p*.24;stage.rotation.y+=(pointerX*.1-stage.rotation.y)*.035;stage.rotation.x+=(-pointerY*.025-stage.rotation.x)*.035;renderer.render(scene,camera);}
  function loop(t){if(!active)return;if(t-last>=1000/30){render(t);last=t;}frame=requestAnimationFrame(loop);}
  function synchronize(){if(disposed)return;const next=visible&&!document.hidden&&!motion.matches;if(next&&!active){active=true;frame=requestAnimationFrame(loop);}else if(!next&&active){active=false;cancelAnimationFrame(frame);}if(visible&&motion.matches)render(0);}
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;synchronize();},{rootMargin:'100px'}).observe(section);
  window.addEventListener('scroll',updateScroll,{passive:true});document.addEventListener('visibilitychange',synchronize);motion.addEventListener('change',()=>{updateScroll();synchronize();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();disposed=true;active=false;cancelAnimationFrame(frame);host.querySelector('.scene-fallback').hidden=false;canvas.hidden=true;hint.textContent='O cuidado está em cada detalhe.';section.classList.add('scene-unavailable');});
  window.addEventListener('pagehide',()=>{active=false;cancelAnimationFrame(frame);});window.addEventListener('pageshow',synchronize);
  resize();updateScroll();render(0);canvas.dataset.ready='true';
}catch(error){console.warn('Cena 3D indisponível:',error.message);canvas.hidden=true;host.querySelector('.scene-fallback').hidden=false;hint.textContent='O cuidado está em cada detalhe.';section.classList.add('scene-unavailable');}

