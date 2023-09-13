import { FTPClient } from "basic-ftp";
import fs from "fs";

async function downloadImageFromFTP(image) {
    const client = new FTPClient();

    try {
        await client.access({
            host: "ftp.example.com",
            user: "your-ftp-username",
            password: "your-ftp-password",
        });

        const remoteFilePath = "path/on/ftp/image.jpg"; // Đường dẫn tới tệp ảnh trên FTP
        const localFilePath = "path/to/local/downloaded-image.jpg"; // Đường dẫn tới vị trí tải xuống

        await client.download(fs.createWriteStream(localFilePath), remoteFilePath);
    } catch (error) {
        console.error("Error downloading image:", error);
    } finally {
        client.close();
    }
}

export default downloadImageFromFTP;
