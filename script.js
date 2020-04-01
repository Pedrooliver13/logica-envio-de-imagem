const PhotosUpload = {
  // lógica de envio de imagens;
  input: "",
  UploadLimit: 6,
  files: [],
  preview: document.querySelector("#photos-preview"),
  handleFileInput(event) {
    const { files: fileList } = event.target;
    PhotosUpload.input = event.target;

    if (PhotosUpload.hasLimit(event)) return;

    Array.from(fileList).map(file => {
      const reader = new FileReader();
      PhotosUpload.files.push(file);

      reader.onload = () => {
        const image = new Image(); // <img src>
        image.src = String(reader.result);

        const div = PhotosUpload.getContainer(image);

        PhotosUpload.preview.appendChild(div);
      };

      reader.readAsDataURL(file);
    });
  },
  getAllFiles() {
    const dataTransfer =
      new ClipboardEvent("").clipboardData || new DataTransfer(); // mozilla || chrome;
    PhotosUpload.files.forEach(file => dataTransfer.items.add(file));

    return dataTransfer.files;
  },
  hasLimit(event) {
    const { UploadLimit, input } = PhotosUpload;
    const { files: filesList } = input;

    if (filesList.length > UploadLimit) {
      alert(`Envie no máximo ${UploadLimit} fotos`);
      event.preventDefault();

      return true;
    }

    return false;
  },
  getContainer(image) {
    const div = document.createElement("div");
    div.classList.add("photo");

    div.onclick = PhotosUpload.removePhoto;

    div.appendChild(image);
    div.appendChild(PhotosUpload.removeButton());

    return div;
  },
  removeButton() {
    const button = document.createElement("i");
    button.classList.add("material-icons");
    button.innerHTML = "close";

    return button;
  },
  removePhoto(event) {
    const photoDiv = event.target.parentNode; // event.target = <i> // event.target.parentNode; = <div class="photo">
    const photoArray = Array.from(PhotosUpload.preview.children);

    const index = photoArray.indexOf(photoDiv);

    PhotosUpload.files.splice(index, 1);
    PhotosUpload.input.files = PhotosUpload.getAllFiles();

    return photoDiv.remove();
  },
  removeOldPhoto(event) {
    const photoDiv = event.target.parentNode; // <div class="photo">

    if (photoDiv.id) {
      const removedFiles = document.querySelector('input[name="removed_files"]');

      if (removedFiles) {
        removedFiles.value += `${photo.id},`;
      }
    }

    return photoDiv.remove();
  }
}
