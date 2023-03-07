import * as THREE from 'three';
import GlobalConfig from '../../Utils/Global/GlobalConfig';
let img = require('../../Assets/tt.jpg');
class Main3D{
    private cube: THREE.Mesh;
    private texture: THREE.Texture;
    private material: THREE.MeshBasicMaterial;
    constructor(){
        this.texture = new THREE.TextureLoader().load(img);
        this.material = new THREE.MeshBasicMaterial({ map: this.texture });
        this.cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), this.material );

        GlobalConfig.scene.add( this.cube );
        this.cube.position.x = -1;
    }
    public animate(){                                           //渲染并实现动画
        requestAnimationFrame(()=>this.animate());
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        GlobalConfig.render.render( GlobalConfig.scene, GlobalConfig.camera );
    }
}
export default new Main3D 