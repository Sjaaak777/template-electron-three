class Cube {
    constructor(x, y, z, color) {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshStandardMaterial({ color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }

    rotate() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }

    stopRotation() {
        this.mesh.rotation.x *= 0.995;
        this.mesh.rotation.y *= 0.995;
    }
}

// Export the Cube class so it can be imported in other files
export { Cube };
