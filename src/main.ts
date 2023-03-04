import $ from 'jquery'
import Main3D from './ThreeModules/Main';

(() => {
    Main3D.animate()
    console.log($('body').offset())
})()