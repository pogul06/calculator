var exp=document.querySelector(".expression");
var ans=document.querySelector('.answer');
var buttons=document.querySelectorAll('.btn');
console.log(buttons)
exp.value='';
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        exp.value=exp.value+button.getAttribute("data");
    })
})

function solve()
{
    var expr=exp.value;
    var result=eval(expr);
    ans.value=result;
}

function cleardata()
{
    ans.value='';
    exp.value='';
}

function twoscompl()
{

    ans.value=eval((~exp.value)+1);
}
















// function onesComplementBinary(decimalNumber) {
//     // Calculate the 1's complement of the decimal number
//     const onesComplement = ~decimalNumber;
  
//     // Convert the 1's complement to its binary representation as a string
//     const binaryString = (onesComplement >>> 0).toString(2);
  
//     // Pad the binary string with leading zeros to ensure a consistent width
//     const binaryWidth = 8; // Assuming 32-bit representation
//     const paddedBinary = binaryString.padStart(binaryWidth, '0');
  
//     return paddedBinary;
//   }
  
//   // Example usage:
//   const decimalNumber = 8;
//   const onesComplementBinaryString = onesComplementBinary(decimalNumber);
  
//   console.log("Decimal Number: ", decimalNumber);
//   console.log("1's Complement Binary: ", onesComplementBinaryString);
  

// function twosComplementBinary(decimalNumber, bitWidth) {
//     // Calculate the 2's complement of the decimal number
//     const twoComplement = (decimalNumber < 0) ? (decimalNumber >>> 0) : decimalNumber;
  
//     // Convert the 2's complement to its binary representation as a string
//     const binaryString = twoComplement.toString(2);
  
//     // Pad the binary string with leading zeros to ensure the specified bit width
//     const paddedBinary = binaryString.padStart(bitWidth, '0');
  
//     return paddedBinary;
//   }
  
//   // Example usage:
//   const decimalNumber = 4;
//   const bitWidth = 32; // Assuming 32-bit representation
//   const twosComplementBinaryString = twosComplementBinary(decimalNumber, bitWidth);
  
//   console.log("Decimal Number: ", decimalNumber);
//   console.log("2's Complement Binary: ", twosComplementBinaryString);
  

