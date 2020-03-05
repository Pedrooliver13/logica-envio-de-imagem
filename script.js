const PhotosUpload = {
  input: '',
  preview: document.querySelector('#photos-preview'),
  uploadLimit:6,
  files:[],
  handleFileInput(event){
    const{files:fileList } = event.target
    PhotosUpload.input = event.target
    
    if(PhotosUpload.hasLimit(event)) return
    
    //pegando fotos(image) com input e adicionamos a uma div que vai entrar em outra div
    Array.from(fileList).forEach(file =>{
      const reader = new FileReader()
      
      reader.onload = ()=>{//onload == espera ficar pronto
        const image = new Image()
        image.src = String(reader.results)
        
        const div = PhotosUpload.getContainer(image)
        
        PhotosUpload.preview.appendChild(div)
      }
      
      reader.readAsDataUrl(file)//ele avisa quando está pronto
    })
    PhotosUpload.input.files = PhotosUpload.getAllFiles()
  },
  hasLimit(event){
  const { uploadLimit, input: fileList } = PhotosUpload
    
    //dando um limite de fotos a serem enviadas
    if(fileList.length > uploadLimit){
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()
      return true
    }
    
    return false
  },
  getAllFiles(){
    const dataTransfer = ClipBoardEvent("").clipboardData || new DataTranser() //mozilla || chrome
    PhotosUpload.files.forEach(file => dataTransfer.items.add(file)) // pegando os files e adicionando á variavel(assim é possível deletar)
    
    return dataTransfer.files
  },
  getContainer(image){
    const div = document.CreatedElement('div')
    div.classList.add('photos')

    div.onclick = PhotosUpload.removePhoto // assim ele já entende que é para passar o event para o removePhoto

    div.appendChild(image)
    div.appendChild(PhotosUpload.removeButton())

    return div
  },
  removeButton(){
    const button = document.createElement('div')
    button.classList.add('material-icons')
    button.innerHTML = 'close'
  
    return button
  },
  removePhoto(event){
    const photoDiv = event.target.parentNode // <div class="photo">
    const photoArray = Array.from(PhotosUpload.preview.children) // transformando em array para pode usar o indexOf

    const index = photosArray.indexOf(photoDiv)

    PhotosUpload.files.splice(index , 1) 
    //splice = 1º parâmetro: quando encontrar o que eu pedi; 2º parâmetro: quantos ele vai deletar quando encontrar
    PhotosUpload.input.files = PhotosUpload.getAllfiles()// roda a função novamente para atualizar os filesList
    
    photoDiv.remove()//remove no apenas no front-end
  }
}
