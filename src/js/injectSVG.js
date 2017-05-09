function inject(id) {

    if (!id) { throw "Graphics must have a container. Pass ID of container as a string."; }
    document.querySelector("#" + id).insertAdjacentHTML('beforeend', svgCode);
}