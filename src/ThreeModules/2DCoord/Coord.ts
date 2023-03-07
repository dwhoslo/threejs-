import * as THREE from 'three';
import GlobalConfig from '../../Utils/Global/GlobalConfig';
class Coord2D{

    public cube: THREE.Mesh;
    constructor(){
        this.cube = new THREE.Mesh( new THREE.PlaneGeometry(50,50), new THREE.MeshLambertMaterial( { color: 0xf00 } ) );
        this.cube.rotation.x = -Math.PI/2 + 0.3;
        this.cube.position.y = -0.5;
    }
    public init(){                                           //渲染并实现动画 
        GlobalConfig.scene.add( this.cube );
    }
}
export default new Coord2D 