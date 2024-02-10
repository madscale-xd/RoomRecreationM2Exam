//Scene, camera, renderer, texture setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //fullscreen
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); ///fullscreen
document.body.appendChild( renderer.domElement );
const textureLoader = new THREE.TextureLoader();

//floor setup
const floorGeometry = new THREE.PlaneGeometry(16, 6);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x382e42, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

//chair setup
const chairBaseGeom = new THREE.CylinderGeometry( 0.10, 0.10, 0.60, 32 ); 
const chairBaseMat = new THREE.MeshStandardMaterial( {color: 0x000000} );
const chairBase = new THREE.Mesh( chairBaseGeom, chairBaseMat ); 
floor.add( chairBase );

const chairBaseeGeom = new THREE.CylinderGeometry( 0.10, 0.10, 1.44, 32 ); 
const chairBaseeMat = new THREE.MeshStandardMaterial( {color: 0x000000} );
const chairBasee1 = new THREE.Mesh( chairBaseeGeom, chairBaseeMat ); 
chairBase.add( chairBasee1 );
const chairBasee2 = new THREE.Mesh( chairBaseeGeom, chairBaseeMat ); 
chairBase.add( chairBasee2 );

const chairWheelGeom = new THREE.SphereGeometry( 0.13, 32, 4 ); 
const chairWheelMat = new THREE.MeshStandardMaterial( { color: 0xFC813F} ); 
const chairWheel1 = new THREE.Mesh( chairWheelGeom, chairWheelMat );
chairBase.add( chairWheel1 );
const chairWheel2 = new THREE.Mesh( chairWheelGeom, chairWheelMat );
chairBase.add( chairWheel2 );
const chairWheel3 = new THREE.Mesh( chairWheelGeom, chairWheelMat );
chairBase.add( chairWheel3 );
const chairWheel4 = new THREE.Mesh( chairWheelGeom, chairWheelMat );
chairBase.add( chairWheel4 );

const chairCushionGeom = new THREE.BoxGeometry(1.5,0.8, 0.25);
const chairCushionMat = new THREE.MeshStandardMaterial( {color: 0xF25278} );
const chairCushion = new THREE.Mesh( chairCushionGeom, chairCushionMat ); 
chairBase.add( chairCushion );

const chairBackGeom = new THREE.BoxGeometry(1.8,0.8, 0.25);
const chairBackMat = new THREE.MeshStandardMaterial( {color: 0xF25278} );
const chairBack = new THREE.Mesh( chairBackGeom, chairBackMat ); 
chairCushion.add( chairBack );

const armChairGeom = new THREE.BoxGeometry(0.3,1.2,0.2);
const armChairMat = new THREE.MeshStandardMaterial( {color: 0x000000} );
const armChair1 = new THREE.Mesh( armChairGeom, armChairMat );
chairBack.add(armChair1);
const armChair2 = new THREE.Mesh( armChairGeom, armChairMat );
chairBack.add(armChair2);

const light = new THREE.PointLight( 0xFFFFFF, 50, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

//ceiling setup
const ceilingGeometry = new THREE.PlaneGeometry(15, 4.4);
const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0x6b667b, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
scene.add(ceiling);

const ceilinggGeometry = new THREE.PlaneGeometry(12.2, 3.4);
const ceilinggMaterial = new THREE.MeshStandardMaterial({ color: 0x3b2a22, side: THREE.DoubleSide });
const ceilingg = new THREE.Mesh(ceilinggGeometry, ceilinggMaterial);
ceiling.add(ceilingg);

const ceilingggGeometry = new THREE.PlaneGeometry(10.2, 2.65);
const ceilingggTexture = textureLoader.load('https://t4.ftcdn.net/jpg/01/79/07/77/360_F_179077796_P6UNHX6KBpb1hITJSF1gN173qw4GF98U.jpg');
ceilingggTexture.repeat.set(2,1); 
ceilingggTexture.wrapS = THREE.RepeatWrapping;
ceilingggTexture.wrapT = THREE.RepeatWrapping;
const ceilingggMaterial = new THREE.MeshStandardMaterial({ map:ceilingggTexture, side: THREE.DoubleSide });
const ceilinggg = new THREE.Mesh(ceilingggGeometry, ceilingggMaterial);
ceilingg.add(ceilinggg);

//LIGHTING setup
const lbGeometry = new THREE.SphereGeometry( 0.7, 64, 16 ); 
const lbMaterial = new THREE.MeshStandardMaterial( { color: 0xf9f6c4, emissive: 0xf9f6c4 } ); 
const lightBulb = new THREE.Mesh( lbGeometry, lbMaterial ); 
scene.add( lightBulb );
const pointLighta = new THREE.PointLight(0xf9f6c4, 2);
pointLighta.position.copy(lightBulb.position);
const ambientLighta = new THREE.AmbientLight(0xfafde8, 0.2);
lightBulb.add(ambientLighta);
const ambientLightc = new THREE.AmbientLight(0x565c7c, 4);
lightBulb.add(ambientLightc);

const ring1geom = new THREE.TorusGeometry( 2, 0.14, 2, 50 ); 
const ring1mat = new THREE.MeshStandardMaterial( { color: 0xecdfaf, emissive: 0xf9f6c4, side: THREE.DoubleSide  } ); 
const ring1 = new THREE.Mesh( ring1geom, ring1mat ); 
lightBulb.add( ring1 );

const ring2geom = new THREE.TorusGeometry( 1.6, 0.10, 2, 50 ); 
const ring2mat = new THREE.MeshStandardMaterial( { color: 0xecdfaf, emissive: 0xf9f6c4, side: THREE.DoubleSide  } ); 
const ring2 = new THREE.Mesh( ring2geom, ring2mat ); 
lightBulb.add( ring2 );

const ring3geom = new THREE.TorusGeometry( 1.2, 0.06, 2, 50 ); 
const ring3mat = new THREE.MeshStandardMaterial( { color: 0xecdfaf, emissive: 0xf9f6c4, side: THREE.DoubleSide  } ); 
const ring3 = new THREE.Mesh( ring3geom, ring3mat ); 
lightBulb.add( ring3 );

const ring4geom = new THREE.TorusGeometry( 1, 0.03, 2, 50 ); 
const ring4mat = new THREE.MeshStandardMaterial( { color: 0xecdfaf, emissive: 0xf9f6c4, side: THREE.DoubleSide  } ); 
const ring4 = new THREE.Mesh( ring4geom, ring3mat ); 
lightBulb.add( ring4 );

//front wall and windows setup
const fWallGeometry = new THREE.PlaneGeometry(16, 6.5);
const fWallMaterial = new THREE.MeshStandardMaterial({ color: 0xbca19a, side: THREE.DoubleSide });
const fWall = new THREE.Mesh(fWallGeometry, fWallMaterial);
scene.add(fWall);

const fWallLineGeom = new THREE.PlaneGeometry(16, 0.15);
const fWallLineMat = new THREE.MeshStandardMaterial({ color: 0x2a1b20, side: THREE.DoubleSide });
const fWallLine = new THREE.Mesh(fWallLineGeom, fWallLineMat);
fWall.add(fWallLine);

const windowsGeometry = new THREE.PlaneGeometry(9, 3.7);
const windowsTexture = textureLoader.load('https://i.ibb.co/XxvysnX/sddefault.jpg');
windowsTexture.repeat.set(5,3); 
windowsTexture.wrapS = THREE.RepeatWrapping;
windowsTexture.wrapT = THREE.RepeatWrapping;
const windowsMaterial = new THREE.MeshStandardMaterial({ map: windowsTexture, side: THREE.DoubleSide });
const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
scene.add(windows);

const wframe1Geometry = new THREE.PlaneGeometry(9.2, 0.7);
const wframe1Material = new THREE.MeshStandardMaterial({ color: 0x585d66, side: THREE.DoubleSide });
const wframe1 = new THREE.Mesh(wframe1Geometry, wframe1Material);
scene.add(wframe1);

const wframe2Geometry = new THREE.PlaneGeometry(9.2, 0.2);
const wframe2Material = new THREE.MeshStandardMaterial({ color: 0x585d66, side: THREE.DoubleSide });
const wframe2 = new THREE.Mesh(wframe2Geometry, wframe2Material);
scene.add(wframe2);

const wframe3Geometry = new THREE.PlaneGeometry(0.2, 3.5);
const wframe3Material = new THREE.MeshStandardMaterial({ color: 0x585d66, side: THREE.DoubleSide });
const wframe3 = new THREE.Mesh(wframe3Geometry, wframe3Material);
scene.add(wframe3);
const wframe4 = new THREE.Mesh(wframe3Geometry, wframe3Material);
scene.add(wframe4);

const curtainGeometry = new THREE.PlaneGeometry(1.3, 4.2);
const curtainMaterial = new THREE.MeshStandardMaterial({ color: 0xa7acbf, side: THREE.DoubleSide });
const curtain1 = new THREE.Mesh(curtainGeometry, curtainMaterial);
windows.add(curtain1);
const curtain2 = new THREE.Mesh(curtainGeometry, curtainMaterial);
windows.add(curtain2);

//left wall setup
const lWallGeometry = new THREE.PlaneGeometry(5.1, 6.5);
const lWallMaterial = new THREE.MeshStandardMaterial({ color: 0xbca19a, side: THREE.DoubleSide });
const lWall = new THREE.Mesh(lWallGeometry, lWallMaterial);
scene.add(lWall);

const lWallLineGeom = new THREE.PlaneGeometry(5.1, 0.15);
const lWallLineMat = new THREE.MeshStandardMaterial({ color: 0x2a1b20, side: THREE.DoubleSide });
const lWallLine = new THREE.Mesh(lWallLineGeom, lWallLineMat);
lWall.add(lWallLine);

//right wall setup
const rWallGeometry = new THREE.PlaneGeometry(5.1, 6.5);
const rWallMaterial = new THREE.MeshStandardMaterial({ color: 0xbca19a, side: THREE.DoubleSide });
const rWall = new THREE.Mesh(rWallGeometry, rWallMaterial);
scene.add(rWall);

const rWallLineGeom = new THREE.PlaneGeometry(5.1, 0.15);
const rWallLineMat = new THREE.MeshStandardMaterial({ color: 0x2a1b20, side: THREE.DoubleSide });
const rWallLine = new THREE.Mesh(rWallLineGeom, rWallLineMat);
rWall.add(rWallLine);

const shelfGeom = new THREE.BoxGeometry(1.3, 0.11, 4);
const shelfMat = new THREE.MeshStandardMaterial({ color: 0xaa6542, side: THREE.DoubleSide });
const shelf1 = new THREE.Mesh(shelfGeom, shelfMat);
rWall.add(shelf1);
const shelf2 = new THREE.Mesh(shelfGeom, shelfMat);
shelf1.add(shelf2);
const shelf3 = new THREE.Mesh(shelfGeom, shelfMat);
shelf2.add(shelf3);

const ballGeometry = new THREE.SphereGeometry( 0.19, 16, 16 ); 
const ballMaterial = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
const ball = new THREE.Mesh( ballGeometry, ballMaterial ); 
shelf1.add( ball );

const bookRightGeom = new THREE.BoxGeometry(0.95, 0.45, 1);
const bookRightMat = new THREE.MeshStandardMaterial({ color: 0xBD9943, side: THREE.DoubleSide });
const bookRight = new THREE.Mesh(bookRightGeom, bookRightMat);
shelf3.add(bookRight);

//bed setup
const bedframeGeometry = new THREE.BoxGeometry(5, 0.7, 2);
const bedframeMaterial = new THREE.MeshStandardMaterial({ color: 0x150a0a, side: THREE.DoubleSide });
const bedframe = new THREE.Mesh(bedframeGeometry, bedframeMaterial);
scene.add(bedframe);

const bedGeometry = new THREE.BoxGeometry(4.3, 0.8, 2);
const bedMaterial = new THREE.MeshStandardMaterial({ color: 0xb1a3bd, side: THREE.DoubleSide });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
scene.add(bed);

const pillowGeom = new THREE.TorusGeometry( 0.44, 0.25, 16, 100 ); 
const pillowTexture = textureLoader.load('https://cdn.architextures.org/textures/23/6/blue-checkered-cotton-textile-none-ltaszw.jpg');
pillowTexture.repeat.set(2,2); 
pillowTexture.wrapS = THREE.RepeatWrapping;
pillowTexture.wrapT = THREE.RepeatWrapping;
const pillowMat = new THREE.MeshStandardMaterial({ map: pillowTexture, side: THREE.DoubleSide }); 
const pillow = new THREE.Mesh( pillowGeom, pillowMat ); 
bed.add( pillow );

const headboardGeometry = new THREE.BoxGeometry(0.3, 3, 2);
const headboardMaterial = new THREE.MeshStandardMaterial({ color: 0x150a0a, side: THREE.DoubleSide });
const headboard = new THREE.Mesh(headboardGeometry, headboardMaterial);
scene.add(headboard);

const bedboardGeometry = new THREE.BoxGeometry(0.3, 2.05, 2.10);
const bedboardMaterial = new THREE.MeshStandardMaterial({ color: 0xbeb4b7, side: THREE.DoubleSide });
const bedboard = new THREE.Mesh(bedboardGeometry, bedboardMaterial);
scene.add(bedboard);

//carpet setup
const bunnyGeometry = new THREE.CircleGeometry(2.2, 32);
const bunnyMaterial = new THREE.MeshStandardMaterial({ color: 0xFFB6C1, side: THREE.DoubleSide });
const bunny = new THREE.Mesh(bunnyGeometry, bunnyMaterial);
scene.add(bunny);

const eyeGeometry = new THREE.CircleGeometry(0.6,32);
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide });
const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
bunny.add(eye1);
bunny.add(eye2);

const noseGeometry = new THREE.CircleGeometry(0.4,32);
const noseMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide });
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
bunny.add(nose);

const mouthGeometry = new THREE.CircleGeometry(0.15,32);
const mouthMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide });
const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
bunny.add(mouth);

const earGeometry = new THREE.CircleGeometry(1.1,32); 
const earMaterial = new THREE.MeshStandardMaterial({ color: 0xFFB6C1, side: THREE.DoubleSide });
const ear1 = new THREE.Mesh(earGeometry, earMaterial);
scene.add(ear1);
const ear2 = new THREE.Mesh(earGeometry, earMaterial);
scene.add(ear2);

//desks setup
const desk1Geometry = new THREE.BoxGeometry(1.8, 0.25, 2.5);
const desk1Material = new THREE.MeshStandardMaterial({ color: 0xc1937f, side: THREE.DoubleSide });
const desk1 = new THREE.Mesh(desk1Geometry, desk1Material);
scene.add(desk1);

const desk2Geometry = new THREE.BoxGeometry(1.8, 0.25, 5.8);
const desk2Material = new THREE.MeshStandardMaterial({ color: 0xc1937f, side: THREE.DoubleSide });
const desk2 = new THREE.Mesh(desk2Geometry, desk2Material);
scene.add(desk2);

//cabinet setup
const cabinetGeometry = new THREE.BoxGeometry(1.1, 2.3, 3);
const cabinetMaterial = new THREE.MeshStandardMaterial({ color: 0x352325, side: THREE.DoubleSide });
const cabinet = new THREE.Mesh(cabinetGeometry, cabinetMaterial);
scene.add(cabinet);

const knobGeometry = new THREE.CylinderGeometry( 0.12, 0.21, 0.15, 32 ); 
const knobTexture = textureLoader.load('https://cdn.architextures.org/textures/20/11/aluminium-5fc4cbb43c06e-1200.jpg?s=400&q=60');
knobTexture.repeat.set(2,1); 
knobTexture.wrapS = THREE.RepeatWrapping;
knobTexture.wrapT = THREE.RepeatWrapping;
const knobMaterial = new THREE.MeshStandardMaterial( {map: knobTexture, side: THREE.DoubleSide} ); 
const knob = new THREE.Mesh( knobGeometry, knobMaterial); 
cabinet.add( knob );

const knobbGeometry = new THREE.SphereGeometry(0.17, 32, 16 ); 
const knobbTexture = textureLoader.load('https://cdn.architextures.org/textures/20/11/aluminium-5fc4cbb43c06e-1200.jpg?s=400&q=60');
knobbTexture.repeat.set(2,1); 
knobbTexture.wrapS = THREE.RepeatWrapping;
knobbTexture.wrapT = THREE.RepeatWrapping;
const knobbMaterial = new THREE.MeshStandardMaterial( {map: knobbTexture, side: THREE.DoubleSide} ); 
const knobb = new THREE.Mesh( knobbGeometry, knobbMaterial );
knob.add( knobb );

//tv stup
const tvGeometry = new THREE.BoxGeometry(0.2, 2.8, 3);
const tvMaterial = new THREE.MeshStandardMaterial( {color: 0x6e142f} ); 
const tv = new THREE.Mesh( tvGeometry, tvMaterial); 
lWall.add( tv );

const tvScreenGeom = new THREE.PlaneGeometry(2.75, 2.6);
const tvTexture = textureLoader.load('https://www.levelpush.com/wp-content/uploads/2024/02/honkai-star-tail-penacony.jpeg');
const tvScreenMat = new THREE.MeshStandardMaterial({ map: tvTexture, side: THREE.DoubleSide, emissive: 0xffffff, emissiveIntensity: -0.13 });
const tvScreen = new THREE.Mesh( tvScreenGeom, tvScreenMat); 
tv.add( tvScreen );

//potted plant setup
const potGeometry = new THREE.CylinderGeometry( 0.45, 0.25, 0.8, 12 ); 
const potMaterial = new THREE.MeshStandardMaterial( {color: 0x5e4543} ); 
const pot = new THREE.Mesh( potGeometry, potMaterial); 
scene.add( pot );

const leafGeometry = new THREE.ConeGeometry(0.1,2,32);
const leafMaterial = new THREE.MeshStandardMaterial( {color: 0x052902} );
const leaf1 = new THREE.Mesh( leafGeometry, leafMaterial );
pot.add(leaf1);
const leaf2 = new THREE.Mesh( leafGeometry, leafMaterial );
pot.add(leaf2);
const leaf3 = new THREE.Mesh( leafGeometry, leafMaterial );
pot.add(leaf3);

//poster setup
const posterGeometry = new THREE.PlaneGeometry(3.3, 2.5);
const posterTexture = textureLoader.load('https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/05/honkai-star-rail-march-7th-freezing-enemy.jpg');
const posterMaterial = new THREE.MeshStandardMaterial({ map: posterTexture, side: THREE.DoubleSide, emissive: 0xffffff, emissiveIntensity: -0.13 });
const poster = new THREE.Mesh(posterGeometry, posterMaterial);
scene.add(poster);

//study area setup
const pcBaseGeometry = new THREE.CircleGeometry(0.5,32);
const pcBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xFFC0CB, side: THREE.DoubleSide });
const pcBase = new THREE.Mesh(pcBaseGeometry, pcBaseMaterial);
desk2.add(pcBase);

const mousePadGeometry = new THREE.CircleGeometry(0.5,32);
const mousePadMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide });
const mousePad = new THREE.Mesh(mousePadGeometry, mousePadMaterial);
desk2.add(mousePad);

const pencilCaseGeometry = new THREE.CylinderGeometry( 0.14, 0.14, 0.8, 32 ); 
const pencilCaseMaterial = new THREE.MeshStandardMaterial( {color: 0x00000f} ); 
const pencilCase = new THREE.Mesh( pencilCaseGeometry, pencilCaseMaterial); 
desk2.add( pencilCase );

const pcNeckGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.6);
const pcNeckMaterial = new THREE.MeshStandardMaterial({ color: 0xFFC0CB, side: THREE.DoubleSide });
const pcNeck = new THREE.Mesh(pcNeckGeometry, pcNeckMaterial);
pcBase.add(pcNeck);

const pcFaceGeometry = new THREE.BoxGeometry(0.2, 2.8, 1.6);
const pcFaceMaterial = new THREE.MeshStandardMaterial({ color: 0xFFC0CB, side: THREE.DoubleSide });
const pcFace = new THREE.Mesh(pcFaceGeometry, pcFaceMaterial);
pcNeck.add(pcFace);

const pcFaceeGeometry = new THREE.PlaneGeometry(2.6, 1.4);
const pcTexture = textureLoader.load('https://mmos.com/wp-content/gallery/honkai-star-rail/Honkai-Star-Rail-Team-Buff.jpg');
const pcFaceeMaterial = new THREE.MeshStandardMaterial({ map: pcTexture, side: THREE.DoubleSide, emissive: 0xffffff, emissiveIntensity: -0.13 });
const pcFacee = new THREE.Mesh(pcFaceeGeometry, pcFaceeMaterial);
pcFace.add(pcFacee);

const pcCPUGeometry = new THREE.BoxGeometry(0.8, 1.08, 0.56);
const pcCPUMaterial = new THREE.MeshStandardMaterial({ color: 0x353541, side: THREE.DoubleSide });
const pcCPU = new THREE.Mesh(pcCPUGeometry, pcCPUMaterial);
desk2.add(pcCPU);

const pcPowerButtonGeom = new THREE.CircleGeometry(0.12,32);
const pcPowerButtonMat = new THREE.MeshStandardMaterial({ color: 0xf73132, side: THREE.DoubleSide });
const pcPowerButton = new THREE.Mesh(pcPowerButtonGeom, pcPowerButtonMat);
pcCPU.add(pcPowerButton);

const pcPowerCenterGeom = new THREE.CircleGeometry(0.09,32);
const pcPowerCenterMat = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide });
const pcPowerCenter = new THREE.Mesh(pcPowerCenterGeom, pcPowerCenterMat);
pcPowerButton.add(pcPowerCenter);

const pcPowerCenterrGeom = new THREE.CircleGeometry(0.04,32);
const pcPowerCenterrMat = new THREE.MeshStandardMaterial({ color: 0xf73132, side: THREE.DoubleSide });
const pcPowerCenterr = new THREE.Mesh(pcPowerCenterrGeom, pcPowerCenterrMat);
pcPowerCenter.add(pcPowerCenterr);

const book1Geometry = new THREE.BoxGeometry(0.8, 0.3, 1.0);
const book1Material = new THREE.MeshStandardMaterial({ color: 0x800000, side: THREE.DoubleSide });
const book1 = new THREE.Mesh(book1Geometry, book1Material);
desk1.add(book1);

const book2Geometry = new THREE.BoxGeometry(1.0, 0.19, 1.1);
const book2Material = new THREE.MeshStandardMaterial({ color: 0x20404a, side: THREE.DoubleSide });
const book2 = new THREE.Mesh(book2Geometry, book2Material);
book1.add(book2);

const book3Geometry = new THREE.BoxGeometry(0.7, 0.5, 0.8);
const book3Material = new THREE.MeshStandardMaterial({ color: 0x9f826b, side: THREE.DoubleSide });
const book3 = new THREE.Mesh(book3Geometry, book3Material);
book2.add(book3);

//lamp setup
const lampBaseGeometry = new THREE.CircleGeometry(0.4,32);
const lampBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x0F0803, side: THREE.DoubleSide });
const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
floor.add(lampBase);

const lampStickGeom = new THREE.CylinderGeometry( 0.05, 0.05, 3.4, 32 ); 
const lampStickMat = new THREE.MeshStandardMaterial( {color: 0x0F0803, side: THREE.DoubleSide } );
const lampStick = new THREE.Mesh( lampStickGeom, lampStickMat ); 
lampBase.add( lampStick );

const lampHeadGeom = new THREE.CylinderGeometry( 0.19, 0.6, 1, 32 ); 
const lampHeadMat = new THREE.MeshStandardMaterial( {color: 0xae9b86, emissive: 0xf9f6c4, side: THREE.DoubleSide} );
const lampHead = new THREE.Mesh( lampHeadGeom, lampHeadMat ); 
lampStick.add( lampHead );
const pointLightb = new THREE.PointLight(0xf9f6c4, 5);
pointLightb.position.copy(lampHead.position);
const ambientLightb = new THREE.AmbientLight(0xfbfde5, 0.2);
lampHead.add(ambientLightb);

//Camera Placement (commented ones are for overhead checking, comment ceiling as well to check)
camera.position.z = 6.3;       //6.3
//camera.position.y = 10; //10
//camera.rotation.x = -1;

// defining the room through animate() function
function animate() {
    requestAnimationFrame(animate);

    // floor
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3;
    floor.position.z = -0.5;

    //chair
    chairBase.rotation.x = -Math.PI / 2;
    chairBase.position.x = -3.2;
    chairBase.position.y = -0.4;
    chairBase.position.z = 0.55;
    chairCushion.rotation.x = Math.PI/2;
    chairCushion.position.z = 0;
    chairCushion.position.y = -0.45;
    chairBack.rotation.y = Math.PI/2;
    chairBack.position.x = -0.63;
    chairBack.position.z = 1;
    armChair1.rotation.x = Math.PI/2;
    armChair1.position.y = -0.5;
    armChair1.position.z = 0.6;
    armChair1.position.x = 0.42; 
    armChair2.rotation.x = Math.PI/2;
    armChair2.position.y = 0.5;
    armChair2.position.z = 0.6;
    armChair2.position.x = 0.42; 
    chairBasee1.rotation.x = Math.PI/2;
    chairBasee1.position.y = 0.22;
    chairBasee2.rotation.z = Math.PI/2;
    chairBasee2.position.y = 0.22;
    chairWheel1.position.x = 0.65;
    chairWheel2.position.x = -0.65;
    chairWheel3.position.z = -0.65;
    chairWheel4.position.z = 0.65;
    chairWheel1.position.y = 0.42;
    chairWheel2.position.y = 0.42;
    chairWheel3.position.y = 0.42;
    chairWheel4.position.y = 0.42;

    //ceiling
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 3.15;
    ceilingg.position.z = 0.1;
    ceilingg.position.y = 0.4;
    ceilinggg.position.y = 0.28;
    ceilinggg.position.z = 0.1;

    //light bulb
    lightBulb.position.y = 2.35;     //2.35
    lightBulb.position.z = 0.2;
    ring1.rotation.x = Math.PI/2;
    ring1.position.y = -0.03;
    ring1.rotation.y = 0.25;
    ring2.rotation.x = Math.PI/2;
    ring2.position.y = -0.03;
    ring2.rotation.y = -0.25;
    ring3.rotation.x = Math.PI/2;
    ring3.position.y = -0.03;
    ring3.rotation.y = -0.8;
    ring4.rotation.x = Math.PI/2;
    ring4.position.y = -0.03;
    ring4.rotation.y = 0.4;

    //front wall
    fWall.position.z = -2.40;
    fWallLine.position.z = 0;
    fWallLine.position.y = 2.85;

    //windows
    windows.position.z = -2.39;
    windows.position.y = 0.2;
    wframe1.position.y = 2;
    wframe1.position.z = -2;
    wframe2.position.y = -1.5;
    wframe2.position.z = -2;
    wframe3.position.x = -3;
    wframe3.position.y = 0.3;
    wframe3.position.z = -2;
    wframe4.position.x = 3;
    wframe4.position.y = 0.3;
    wframe4.position.z = -2;
    curtain1.position.z = 0.4;
    curtain1.position.y = 0.2;
    curtain1.position.x = 4.25;
    curtain2.position.z = 0.4;
    curtain2.position.y = 0.2;
    curtain2.position.x = -4.25;

    // left wall
    lWall.position.x = -7.65; 
    lWall.rotation.y = -Math.PI / 2;
    lWallLine.position.y = 2.85;

    // right wall
    rWall.position.x = 7.65;
    rWall.rotation.y = -Math.PI / 2; 
    rWallLine.position.y = 2.85;

    //shelves
    shelf1.position.x = 1.6;
    shelf1.position.y = -0.92;
    shelf1.position.z = -0.85;
    shelf2.position.y = -0.8;
    shelf3.position.y = -0.8;
    ball.position.z = 1.4;
    ball.position.y = 0.24;
    ball.position.x = -0.4;
    bookRight.position.z = 1.7;
    bookRight.position.y = 0.34;
    bookRight.position.x = 0.2;

    //bed
    bed.position.x = 4.6;
    bed.position.z = -1;
    bed.position.y = -2.25;
    pillow.rotation.x = Math.PI/2;
    pillow.position.y = 0.6;
    pillow.position.x = 1.3;
    pillow.position.z = 0.01;
    bedframe.position.x = 4.8;
    bedframe.position.z = -1;
    bedframe.position.y = -3;
    headboard.position.x = 7.2;
    headboard.position.z = -1;
    headboard.position.y = -2;
    bedboard.position.x = 6.9;
    bedboard.position.z = -1;
    bedboard.position.y = -1.62;

    //carpet
    bunny.rotation.x = (-Math.PI/2)-0.02;
    bunny.position.y = -2.95;
    bunny.position.z = 1.2;
    ear1.rotation.x = Math.PI/2;
    ear1.position.x = -3.3;
    ear1.position.y = -2.999;
    ear1.position.z = -0.2;
    ear2.rotation.x = Math.PI/2;
    ear2.position.x = 3.3;
    ear2.position.y = -2.999;
    ear2.position.z = -0.2;
    eye1.position.x = 0.9;
    eye1.position.y = 0.5;
    eye1.position.z = 0.1;
    eye2.position.x = -0.95;
    eye2.position.y = 0.5;
    eye2.position.z = 0.1;
    nose.position.x = 0;
    nose.position.y = -0.4;
    nose.position.z = 0.1;
    mouth.position.x = 0;
    mouth.position.y = -1.21;
    mouth.position.z = 0.1;

    //desk1
    desk1.position.x = -7;
    desk1.position.z = -1.2;
    desk1.position.y = -1.85;

    //books
    book1.position.x = 0.15;
    book1.position.y = 0.3;
    book1.position.z = 0.7;
    book2.position.x = -0.05;
    book2.position.y = 0.25;
    book2.position.z = -0.15;
    book3.position.x = 0.16;
    book3.position.y = 0.37;
    book3.position.z = -0.22;

    //desk2
    desk2.position.x = -3.4;
    desk2.position.z = -2.1;
    desk2.position.y = -1.85;
    desk2.rotation.y = Math.PI/2;
    pencilCase.position.x = -0.25;
    pencilCase.position.y = 0.45;
    pencilCase.position.z = -2.5;

    //desktop
    pcBase.rotation.x = Math.PI/2;
    pcBase.position.y = 0.2;
    pcBase.position.x = -0.5;
    pcNeck.position.z = -0.3;
    pcFace.position.z = -0.95;
    pcFacee.position.x = -0.1;
    pcFacee.rotation.y = -Math.PI / 2; 
    pcFacee.rotation.z = Math.PI / 2; 
    pcCPU.position.z = 1;
    pcCPU.position.y = -0.6;
    pcCPU.position.x = -0.5;
    pcPowerButton.rotation.y = -Math.PI / 2;
    pcPowerButton.position.x = -0.4;
    pcPowerButton.position.y = -0.2;
    mousePad.rotation.x = Math.PI/2;
    mousePad.position.x = -0.5;
    mousePad.position.y = 0.2;
    mousePad.position.z = 1.5;

    //cabinet
    cabinet.position.x = -7;
    cabinet.position.y = 1;
    cabinet.position.z = -1;
    knob.position.x = 0.6;
    knob.position.y = -0.6;
    knob.position.z = 0.1;
    knob.rotation.z = -Math.PI/2;
    knobb.position.y = 0.08;

    //tv
    tv.rotation.y = -Math.PI/2;
    tv.position.x = 2.8;
    tv.position.y = 0.85;
    tv.position.z = -1.3;
    tvScreen.rotation.y = -Math.PI/2;
    tvScreen.position.x = -0.1;

    //potteed plant
    pot.position.x = -6.2;
    pot.position.y = -2.7;
    pot.position.z = 1.6;
    leaf1.position.y = 0.5;
    leaf2.position.y = 1.25;
    leaf2.position.z = 0.2;
    leaf3.position.z = -0.05;
    leaf3.position.x = 0.15;
    leaf3.position.y = 0.65;

    //poster
    poster.position.x = 7.64;
    poster.position.y = 1.2;
    poster.position.z = -0.5;
    poster.rotation.y = -Math.PI / 2; 

    //lamp
    lampBase.position.z = 0.1;
    lampBase.position.x = 6.5;
    lampBase.position.y = -1.35;
    lampStick.rotation.x = Math.PI/2;
    lampStick.position.z = 1.65;
    lampHead.position.y = 1.8;

    //rendering everything
    renderer.render(scene, camera);
}
animate();