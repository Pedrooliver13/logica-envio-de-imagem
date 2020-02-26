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
    
    
  }
}
