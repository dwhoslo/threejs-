import * as THREE from 'three';
import GlobalConfig from '../../Utils/Global/GlobalConfig';
class Main3D{
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private cube: THREE.Mesh;

    constructor(){
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        (GlobalConfig.appendDom as HTMLElement).appendChild( this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;

        this.cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );
        this.scene.add( this.cube );
        this.cube.position.x = -1;
    }

    public render(){                                            //渲染并实现动画
        requestAnimationFrame( () => this.render() );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    }
    public animate(){                                           //渲染并实现动画
        requestAnimationFrame(()=>this.animate());
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    }
}
$(()=>{
    console.log($('body').offset())
})
export default new Main3D 