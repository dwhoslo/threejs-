import $ from 'jquery'
import Main3D from './ThreeModules/Main';
import Coord from './ThreeModules/2DCoord/Coord';
import Hand from './ThreeModules/Hand/Hand';

(() => {
    Main3D.animate()
    Coord.init()
    Hand.init()
})()