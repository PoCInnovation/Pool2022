# Module 11: XRAI :pencil:

This day will be busy engineer.<br>
Many civilians have respiratory problems due to living underground.<br>
It turns out that for some patients, it is a case of pneumonia, it is a serious disease and our doctors do not have time to analyze the results of each patient.<br>

Hopefully with the new framework that the scientific team presented to you, you are able to provide a solution to help our doctors.<br>

Use the _Pytorch_ library to create a model identifying pneumonia cases from X-Ray photos.<br>

Contrary to the demonstration made by the scientific team, you have to load the dataset yourself.<br>
For this, the scientific team provides you with a tool that will be useful: _h5py_

To maximize your accuracy the scientific team invites you to implement Convolutions and Pooling in your neural network.<br>
Don't worry, they have written you a manual on convolutional neural networks.

## Convolutional Neural Network
 
 The goal of convolution is to learn to detect specific patterns in the content of an image.
 For example, detect the eyes on a portrait, or the muzzle of a dog etc.
 
 To do this we apply a filter to the image given in input, this is our convolution.
 See the filter as a simple matrix where we choose the number of rows and columns.<br>
 The user is free to choose the number of filters per convolution.<br>
 
 Let's take as an example a filter of size (3\*3).<br>
 When the convolutional layer receives an image as input, it will apply its filter to each set of 3\*3 pixels.<br>
 For each set of 3\*3 pixels the resulting output will be the scalar product of the filter by the set of pixels.<br>
 <img src="./.img/convExplained.png"/>
 <img src="./.img/convExplained2.png"/>
 The final output will then be the input of the next layer which will repeat the same process.
.
 And pooling in all this?
 
The pooling operation is typically performed after each convolutional layer.<br>
It allows to reduce the computation cost and to avoid overfeeding by reducing the size of the input data.

For this we define the size of the filter (in this example 2\*2) as well as the stripe that represents how many pixels our filter will move after each operation (in this example 2\*2).<br>
The filter will therefore take as input a set of 2\*2 pixels (which corresponds to its size) and will give as output the maximum value presented in this set.<br>
For example for a matrix containing `[[0, 1.9],[3.2, 1.6]]` the output will be `3.2`.<br>
<img src="./.img/convExplained3.png"/>

The convolutions linked to pooling will be very useful in your case.
By adding convolution layers before your dense layers, the information provided to the dense layers is much more focused, and potentially more accurate.

## Instructions:

- Save the dataset in a `.hdf5' file
- Build a model to identify patients with pneumonia with a minimum accuracy of 75%.
- Display a graph of the evolution of the loss
- Display a graph of the evolution of the accuracy


Once this is done, submit your code to the platform.

## Resources :book:

- [Dataset](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)
- [Max Pooling in Convolutional Neural Networks explained](https://www.youtube.com/watch?v=ZjM_XQa5s6s)
- [h5py](https://www.h5py.org)
