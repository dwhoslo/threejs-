import * as THREE from 'three';
import GlobalConfig from '../../Utils/Global/GlobalConfig';
let img = require('../../Assets/tt.jpg');
class Hand{
    private texture: THREE.Texture;
    private material: THREE.MeshBasicMaterial;
    private geometry: THREE.BufferGeometry;
    private cube :THREE.Mesh;
    constructor(){
        // 定义顶点坐标和 UV 坐标
        const vertices = new Float32Array([
            -1.0, -1.0,  0.0, // 顶点1
            1.0, -1.0,  0.0, // 顶点2
            1.0,  1.0,  0.0, // 顶点3
            -1.0,  1.0,  0.0, // 顶点4

            // -1.0, -1.0,  -1.0, // 顶点1
            // 1.0, -1.0,  -1.0, // 顶点2
            // 1.0,  1.0,  -1.0, // 顶点3
            // -1.0,  1.0,  -1.0, // 顶点4
        ]);
        
        const uvs = new Float32Array([
            0.0, 0.0, // 顶点1 的 UV 坐标
            1.0, 0.0, // 顶点2 的 UV 坐标
            1.0, 1.0, // 顶点3 的 UV 坐标
            0.0, 1.0, // 顶点4 的 UV 坐标
        ]);
        // 定义面的索引
        const indices = new Uint16Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        // 将顶点坐标和 UV 坐标分别赋值给 geometry 对象的 position 和 uv 属性
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        this.geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
        this.geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        this.texture = new THREE.TextureLoader().load(img);
        this.material = new THREE.MeshBasicMaterial({ map: this.texture ,side:THREE.DoubleSide});

        this.cube = new THREE.Mesh(this.geometry,this.material);

        this.cube.position.x = 5;
        this.cube.position.y = 5;
        this.cube.position.z = 5;
    }

    public init(){
        GlobalConfig.scene.add( this.cube );
    }
}
export default new Hand