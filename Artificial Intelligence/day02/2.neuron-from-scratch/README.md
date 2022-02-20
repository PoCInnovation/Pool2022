# Module 6 : Neuron from scratch :pencil:

Bravo ! Here you are in the heart of the matter, we are going to create our first intelligent neuron! 

To do this, we are going to do things right. In this exercise, you are going to create a "neuron" class that you can reuse to make AI.   

## Instruction : 

Refer to the file my_neuron.py 

> An "Example" represents the data needed for a single prediction. 
>  * In the case where we have the white and red blood cell count of a patient an "Example" would be the white and red blood cell count of a single patient. 
>  * In the case of a prediction from images an "Example" would be a single image 
> 
> An AI trains on several "Examples".  
> 
> The "features" are the data of an Example. 
>  * In the case where we have the rate of white blood cells and red blood cells of a patient, one feature would be the rate of white blood cells and the other would be the rate of red blood cells. So there are 2 features per Example. 
>  * In the case of a prediction from images a "feature" would be a pixel of an image. The features of an Example would be all the pixels of a single image.  
> 
> An **epoch** represents the passage of an AI on the whole dataset. If there are several epochs, the AI passes several times on the whole dataset.   

### We will start by using a neuron as basic as possible to be able to solve linear problems (without activation function to break the linearity). 

--- 

* Start by creating a class "Neuron", to which you add a constructor taking the number of features by Example. 

* In the constructor create and initialize variables for the weights $W$ of the neuron and the bias $b$. 
  
* Create a function resetGrad in the Neuron class to reset the gradients of the weights $W$ and the bias $b$ to their initial values.

<details> 

   <summary> Tips </summary> 

   Be careful, we will use input matrices that we will multiply with the weights. 

</details>  

  

<br/> 

  
* Create a getData() function outside the neuron class. This one should generate linearly spaced data. We need 30 values for x and 30 values for y.  

> This function returns x and y as a numpy array 

  

<details> 

   <summary> Tips </summary> 

   np.linspace 

</details>  

  

<br/> 

* Create a "forward" function in the Neuron class and implement it. (This function takes an "input" parameter).  

>This function returns the result of the forward pass. 

* Create a linear_activation function outside the Neuron class that takes an input parameter. 
* Create a function d_linear_d_input which represents the partial derivative of the linear function with respect to the inputs. 
> This function takes an input params. 
* Create a mean_squared_error function and implement the MSE loss. 
> This function takes a parameter, the predictions of the neuron and the expected targets then return the mean of the error. 

* Create a "backward" function in the Neuron class and implement it.  

>This function computes the gradient of the weights $W$ and the gradient of the bias $b$ then stores them inside the class variables created in the constructor. 

  

  

<details> 

   <summary> Tips </summary> 

   Use the chain rule to calculate the partial derivative of the loss with respect to all weights. This will give you the calculation of the gradient of the loss with respect to the weights. 

</details>  

  

<br/> 

* Create a python main in which you get your data with your getData function in two variables x and y. 
* Create an instance of your Neuron class by specifying the size of the features of your examples. 

  

--- 

  

### You will train your neuron to predict y from x  

  

* Create a loop that iterates over a number of epochs that you have previously defined. 
* In each epoch iterate over the x's and y's and train your neuron from this data.  
> You need to implement the gradient descent method. You normally have all the tools in hand, it's just assembly. 

Congratulations! You have created an artificial neuron. 

## Submit :trophy:

To submit your work, think about pushing your changes. It is important to push so that we are able to assess participation.
If you have any concerns, talk to a supervisor.

## Resources :book:

- [Our own neural neural network from scratch](https://towardsdatascience.com/step-by-step-guide-to-building-your-own-neural-network-from-scratch-df64b1c5ab6e)
- [How to create a neuron from scratch with Python](https://www.youtube.com/watch?v=UszEJzYGnxQ)
- [Forward propagation](https://towardsdatascience.com/forward-propagation-in-neural-networks-simplified-math-and-code-version-bbcfef6f9250)
- [Backward propagation](https://www.analyticsvidhya.com/blog/2021/06/how-does-backward-propagation-work-in-neural-networks/#:~:text=Forward%20Propagation%20is%20the%20way,is%20called%20the%20Backward%20Propagation.)
