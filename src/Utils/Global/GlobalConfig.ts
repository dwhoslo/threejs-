import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

interface IGlobalConfig {
    appendDom: HTMLElement | null;
    scene: THREE.Scene;
    render: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    ambientLight: THREE.AmbientLight;
}
class GlobalConfig implements IGlobalConfig{
    constructor(){
        this.appendDom = document.getElementById('app');
        this.scene = new THREE.Scene();
        this.render = new THREE.WebGLRenderer();
        this.render.setSize( window.innerWidth, window.innerHeight );
        (this.appendDom as HTMLElement).appendChild( this.render.domElement);
        
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.x = 20;
        this.camera.position.y = 20;
        this.camera.position.z = 20;

        this.controls = new OrbitControls(this.camera, this.render.domElement);

        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.ambientLight.intensity =15;
        this.scene.add(this.ambientLight)
    }
    public appendDom: HTMLElement | null = document.getElementById('app');
    public scene: THREE.Scene = new THREE.Scene();
    public render: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    public camera: THREE.PerspectiveCamera;
    public controls: OrbitControls;
    public ambientLight: THREE.AmbientLight;
    
}

export default new GlobalConfig();