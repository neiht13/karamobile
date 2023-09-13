import { Client } from "basic-ftp";
import fs from "fs";

async function uploadImageToFTP(file, remotePath) {
    const client = new Client();

    try {
        await client.access({
            host: "23.30.191.203",
            user: "khoailangchauthanhdt",
            password: "cNp04_snBh@j6Mfk",
        });

        const localFilePath = "path/to/local/image.jpg"; // Đường dẫn tới tệp ảnh cần tải lên
        const remoteFilePath = "path/on/ftp/image.jpg"; // Đường dẫn tới vị trí trên FTP

        await client.uploadFrom(file, remotePath);
    } catch (error) {
        console.error("Error uploading image:", error);
    } finally {
        client.close();
    }
}

export default uploadImageToFTP;