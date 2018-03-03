var cv = require('./utils').cv
var crop = require('./crop')

const img = cv.imread('./images/medicine.jpg')
mat = img.bgrToGray()

// // Simple Thresholding
thresh1 = mat.threshold(127, 255, cv.THRESH_BINARY)
thresh2 = mat.threshold(127, 255, cv.THRESH_BINARY_INV)
thresh3 = mat.threshold(127, 255, cv.THRESH_TRUNC)
thresh4 = mat.threshold(127, 255, cv.THRESH_TOZERO)
thresh5 = mat.threshold(127, 255, cv.THRESH_TOZERO_INV)
cv.imwrite('./images/images_precessed_grey.jpg', mat)
cv.imwrite('./images/images_1_processed.jpg', thresh1)
cv.imwrite('./images/images_2_processed.jpg', thresh2)
cv.imwrite('./images/images_3_processed.jpg', thresh3)
cv.imwrite('./images/images_4_processed.jpg', thresh4)
cv.imwrite('./images/images_5_processed.jpg', thresh5)

//Otsu's Binarization
var blur = mat.gaussianBlur(new cv.Size(5, 5), 0)
gaussThreshold = blur.threshold(127, 255, cv.THRESH_BINARY + cv.THRESH_OTSU)
cv.imwrite('./images/blur.jpg', blur)
cv.imwrite('./images/gaussThreshold.jpg', gaussThreshold)