class ImageUploader {
    async upload(file) {

        const data = new FormData();
        const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

        data.append("file", file);
        data.append("upload_preset", "docs_upload_example_us_preset");

        const result = await fetch(
            url, 
            {
                method: "POST",
                body: data,
            }
        );
        return await result.json();
    }        
}

export default ImageUploader;