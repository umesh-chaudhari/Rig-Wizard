import * as fs from "fs"

// Load the JSON data
fs.readFile('E:\\Material\\material-test\\public\\data\\cpu-cooler.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    let hardDrives = JSON.parse(data);

    // Filter entries where type is "SSD"
    let ssdData = hardDrives.filter(hardDrive => hardDrive.size);

    // Save the filtered data back to a JSON file
    fs.writeFile('cpu-cooler.json', JSON.stringify(ssdData, null, 4), err => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }

        console.log("Filtered SSD data saved to 'ssd_hard_drives.json'");
    });
});
