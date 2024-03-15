const deleteBtn = document.querySelectorAll('.fa-trash')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTarea)
})

async function deleteTarea(){
    const tareaId = this.parentNode.dataset.id
    try{
        const response = await fetch('listatareas/deleteTarea', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'tareaIdFromJSFile': tareaId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

