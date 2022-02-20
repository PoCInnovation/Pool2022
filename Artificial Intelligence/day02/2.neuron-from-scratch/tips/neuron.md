# Neuron

A neuron represents the function we want to adjust.
It takes in several inputs (variable) and each input has a weight "$W$" associated.
It is by varying this weight that we vary the prediction. 
The weight allows to give importance or not to an input variable.
It also plays a role of steering coefficient.

The last weight is the bias $b$ it is the ordinate at the origin of the line or the plane ... representing the model.

In a neuron there are 2 operations :
* The pre-activation which is the result of the function in the neuron (sum weighted with the inputs weight and bias) $z(x) = \sum_{i}^{N}(w_i,x_i) + b$
* The activation, the fact of transforming the output of the function which tends to $+\infty$ and $-\infty$ for different use. for example sigmoid to reduce between 0 and 1 and thus have a binary prediction

![perceptron](./img/perceptron.png)
## Important :

knowing that we know the expected value. The goal of the model is to adjust to make the line or the plane ... by the real expected value.

The return value of the function present in the neuron represents the prediction while we know the expected value of this prediction.

By taking the expected value + the input we are able to form a scatter plot

The function of the model with the adjusted weights will represent a line or a plane that is set up to reduce the distance between the expected values and the prediction as much as possible.

if I take x, y the output z will be on the prediction plane and as close as possible to the real value

if I take x the output y will be on the prediction line and as close as possible to the actual value.

The prediction represents the n + 1 coordinate, that is to say the coordinate of the expected value. 
With 2 entries it's $z$ with 1 entry it's $y$ that is searched

![regressionlin](./img/regressionlin.png)
![logistique](./img/logistiquer3.png)


# Look 3D Surface Plotter and Playground tensorflow