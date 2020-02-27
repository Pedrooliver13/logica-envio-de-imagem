const PhotosUpload = {
  uploadLimit:6,
  handleFileInput(event){
    const{files:fileList } = event.target
    const { uploadLimit } = PhotosUpload
    
    //dando um limite de fotos a serem enviadas
    if(fileList.length > uploadLimit){
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()
      return
    }
    
    //pegando fotos(image) com input e adicionamos a uma div que vai entrar em outra div
    Array.from(fileList).forEach(file =>{
      const reader = new FileReader()
      
      reader.onload = ()=>{//onload == espera ficar pronto
        const image = new Image()
        image.src = String(reader.results)
        
        const div = document.CreatedElement('div')
        div.classList.add('photos')
        
        div.onclick = ()=> alert('Aqui lógica de deletar (ainda em produção)')
        
        div.appendChild(image)
        documen.querySelector('#photos-preview').appendChild(div)
      }
      
      reader.readAsDataUrl(file)//ele avisa quando está pronto
    })
  }
}
