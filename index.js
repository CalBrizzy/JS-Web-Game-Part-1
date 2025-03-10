function newImage(src, left, bottom) {
    let newImage = document.createElement('img')
    newImage.src = src;
    newImage.style.position = 'fixed'
    newImage.style.left = left;
    newImage.style.bottom = bottom;
    document.body.append(newImage)
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

function newItem(src, left, bottom) {
    let newItem = document.createElement('img')
    newItem.src = src;
    newItem.style.position = 'fixed'
    newItem.style.left = left;
    newItem.style.bottom = bottom;
    document.body.append(newItem)

    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '100px')
newItem('assets/staff.png', '600px', '100px')

// for (let i = 0; i < 10; i++ ) {
//     let img = document.createElement('img')
//     img.src = 'assets/sky.png'
//     img.style.position = 'relative'
//     img.style.left = `${i * 0}px`
//     img.style.marginTop = '-4px'
//     img.style.zIndex = '-1'
//     document.body.append(img)
// }


