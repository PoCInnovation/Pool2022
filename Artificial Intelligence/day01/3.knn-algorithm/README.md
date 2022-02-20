# Module 3: KNN :pencil:

Wow, everything is going very fast, here is already the third module, you may not have finished the previous modules, it's not a big deal take the time to understand what you are doing. The pool is intense, and seeing the world of AI in a week is a huge challenge. Keep in mind that this is normal and that it's not a race. You're going to learn about a fairly simple machine learning algorithm that is already answering real-world problems.

# K-nearest neighbours algorithm :house:

This algorithm is used when we want to classify data or perform a regression. At first we use a method called **lazy learning** which means that the training consists only in storing data.

In order to predict the class of a data for example to know what is the type of a flower, we will place all our labeled data in a vector space so that we can calculate the distance between two data.

![knn](./images/knn_example.png)

Then, we just have to define k which is our number of nearest neighbors. For example, if we define $k = 3$, we will calculate which are the three closest data to the data we are trying to classify. The algorithm will then determine that our data is of the majority data type among the k nearest neighbors. In the example of the image if $k=3$ then our data will be a triangle.

You now have a general idea of what the Knn algorithm is, I let you follow the module through the notebook, good luck young scientist.


## Submit :trophy:

To submit your work, think about pushing your changes. It is important to push so that we are able to assess participation.
If you have any concerns, talk to a supervisor.

## Resources :book:

- [Comprendre le Machine Learning: L'algorithme du KNN](https://www.youtube.com/watch?v=9pvbEP1eyNY)
- [How kNN algorithm works](https://www.youtube.com/watch?v=UqYde-LULfs)
- [Predict diseases with KNN](https://www.youtube.com/watch?v=4HKqjENq9OU)
- [KNN scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html)