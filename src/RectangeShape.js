import React from 'react';

const RectangeShape = () => {
    // The Result RGB Colors Array
    const RandonColors = generateRGBColours();

    // Dividing the Range by 8 as instructions says: 
    // The program needs to break each component into steps of -- 8, 16, 24, 32, 40, 48, 56, 64 ..... 256.
    function DividebyEight(begin, stop) {
        var result = [];
        for (let i = begin; i <= stop; i++) {
            if (i !== 0 && i % 8 === 0) {
                result.push(i);
            }
        }
        return result;
    };

    function generateRGBColours() {

        // Generating the Random RGB Colors 0 to 256 and storing them in there separate arrays.
        var arrayofRed = DividebyEight(0, 256);
        var arrayofGreen = DividebyEight(0, 256);
        var arrayofBlue = DividebyEight(0, 256);

        // Creating an Array for all RCB colors.
        var arrayofAllRGBColors = [];

        // For each Color a While is running from 0 till the length of the Respective Color Array.
        // Generating a Random Index to Store A UNIQUE Value for the Respective Color and then storing in there Respective Array.
        // Taking Floor and Multiply it with the length of Respective Color Array because Math.random() retunrns the value between 0 and 1.
        var redCounter = 0;
        while (redCounter < arrayofRed.length) {
            const redRandIdx = Math.floor(Math.random() * arrayofRed.length);
            const redRandomVal = arrayofRed[redRandIdx];
            redCounter++;

            var blueCounter = 0;
            while (blueCounter < arrayofBlue.length) {
                const blueRandIdx = Math.floor(Math.random() * arrayofBlue.length);
                const blueRandomVal = arrayofBlue[blueRandIdx];
                blueCounter++;

                var greenCounter = 0;
                while (greenCounter < arrayofGreen.length) {
                    const greenRandIdx = Math.floor(Math.random() * arrayofGreen.length);
                    const greenRandomVal = arrayofGreen[greenRandIdx];
                    const rgb = `rgb(${redRandomVal},${greenRandomVal},${blueRandomVal})`;
                    arrayofAllRGBColors.push(rgb);
                    greenCounter++;
                }
            }
        }
        // Doing a Console log to check what is Number of Discreate Color Generated.
        // Whic is Done by getting the length of the Main Color array that is 'arrayofAllRGBColors'.
        console.log("Number of Discreate Color = " + arrayofAllRGBColors.length);

        // Lastly, we are going to Mix, All of the colors and then Return it at the end.
        return mixUpColors(arrayofAllRGBColors);
    };

    //  The Function which is going to Mix the Colors inside the array.
    function mixUpColors(colorsArr) {

        // Getting the current index of that is Array length.
        let presentIdx = colorsArr.length;

        // If there still remain any elements to Mix.
        while (presentIdx !== 0) {

            // Get that remaining element's index.
            let randomisedIdx = Math.floor(Math.random() * presentIdx);
            presentIdx--;

            // And Swap it with the current element.
            [colorsArr[presentIdx], colorsArr[randomisedIdx]] = [
                colorsArr[randomisedIdx], colorsArr[presentIdx]];
        }

        return colorsArr;
    }

    // At the End, Loop/Map through the Result RGB Colors Array named 'RandonColors'.
    // And print 32,768 discrete colours of 256 X 128px size of an Image.
    return (
        RandonColors.map((bgColorVal, index) => {
            return (
                <div key={index} style={{ width: '80%', position: 'relative', margin:'8% 10%'}}>
                    <div key={index} id={index} style={{ backgroundColor: bgColorVal }} className="square egg"></div>
                </div>
            )
        })
    );
}

export default RectangeShape;