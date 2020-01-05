import { observable } from 'mobx'

export default observable ({
    owner : 'parent',
    setOwner (owner) {
        this.owner = owner;
    }
});