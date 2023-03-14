import * as THREE from 'three';
import React from 'react';

export default function createSpinningShape(domElement) {
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 10 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer(
        {
            canvas: domElement,
            alpha: true,
        }
    );
    renderer.setSize( 275, 275 );
    renderer.setPixelRatio( window.devicePixelRatio );

    const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 150, 90, 2, 3);

    const imageUrl = '../src/images/black-textured.jpeg'   // relative to the webpack bundle
    const mapTexture = new THREE.TextureLoader().load(imageUrl);
    mapTexture.mapping = THREE.EquirectangularReflectionMapping;

    const material = new THREE.MeshBasicMaterial({
        envMap: mapTexture,
        reflectivity: 1,
    });

    const scene = new THREE.Scene();

    const shape = new THREE.Mesh( geometry, material );
    scene.add(shape);

    function animate() {
        window.requestAnimationFrame( animate );
        shape.rotation.x += 0.003;
        shape.rotation.y += 0.003;
        renderer.render( scene, camera );
    }

    animate()
}
