 # Linear Regression

> Linear regression is a linear modeling technique that allows you to make estimates in the future based on information from the past. This tool is used for technical analysis of stock markets but also for budget management. It is often calculated with the method of least squares which allows to reduce the errors by adding information.

 * In the case of a linear regression the model outputs a prediction of $y$ .So, $f(x) = y$, we give an input $x$ (the area of a house for example) and we expect in $y$ (prediction) the price of the house.

 * Let's imagine that our house is 100 m2 and that its price is 250 010 euros.
 If we pass 100 into $f(x) = ax + b$ and the function returns 200 000
and the function returns 200 000
there is an error of 50 010, so we adjust the $a$ parameter of the function so that it returns exactly 250 010.

* So we want to have $f(x) = 250x + 10$ and that the result is equal to 250 010. If we find the optimal $a$. Each time we enter 100m2 the model will return 250 010 euros
$f(100) = 250 * 100 + 10$ -> 250 010

 * In this case the model represents a straight line because the equation is a linear equation of type $f(x)
 = a x + b$
 so 
 $f(x) = 250x + 10$

 # Important to keep in mind

 * $f(x)$ is a function with 1 variable so its graph is in the space $R^2$.
  
![regressionlin](./img/regressionlin.png)

*linear regression representation*

# Logistic regression

> Logistic regression is a method of statistical analysis that consists of predicting a data value based on actual observations in a dataset. Unlike linear regression where one tries to predict a future value based on past observations. Logistic regression tries to predict binary events (yes/no). And it is the probability of an event occurring that is calculated and not a value.
> 
> Logistic regression is widely used in many fields. We can mention in a non-exhaustive way :
 
* In medicine, it allows, for example, to find the factors that characterize a group of sick subjects compared to healthy subjects.
* In the field of insurance, it can be used to target a fraction of the clientele that will be sensitive to an insurance policy on a particular risk.
* In the banking field, to detect risk groups when taking out a loan.
* In econometrics, for example, voting intentions in elections.

> Binary classification example:
> From data, we need to determine if a patient is sick or healthy (binary = yes/no)
> The number of parameters to add to make the prediction is variable but the number of output is binary.

![logistic](./img/regression_logistique.jpg)

## Dataset

![dataset](./img/dataset.png)

## Forward

> Step where the data is given and a prediction is obtained (the training has not yet passed)

![forward](./img/forward.png)

    - Data on top with label :)
    - Prediction at the bottom of (0,3) -> :(

## Backward

> Once the prediction of the forward is done, we compare it with the label and we get the prediction error.
> Then we adjust the weight of the model to reduce the error. This is the Backward

![backward](./img/backward.png)

## Resume training

![train](./img/train.png)


# Decision boundary

> If we place the white and red blood cell count on a graph with the related labels
> We notice that the higher the rate of white and red blood cells, the healthier the patient is. And vice versa

![plot](./img/plot.png)

> In the case of this problem we can draw a line to solve the problem called decision boundary

![decisionb](./img/decisionb.png)


> look -> http://serge.mehl.free.fr/anx/dtes_p.html

## Important to keep in mind

> Here we have a function of type $f(x,y) = w1*x + w1*y + c$.
> 
> It is a two variable function. Here we have represented its graph in $R^2$ but normally it is in $R^3$.
> 
> In other words, depending on the two parameters $x$ and $y$, the line (actually the plane) of the predictions is in $R^3$. We can do a PCA (Principal Component Analysis) to reduce the dimension as seen before


### representation of a true two-input logistic regression (different from a single input) with x and y predicted z : *$f(x, y) = z$*

![logistiquer3](./img/logistiquer3.png)

> In the case of a forward-backward training of a model, we always update the weights W to adjust (the line or the plane) the predictions