# Module 13 : Recurrent Neural Network :pencil:

A series of seismic events has been occurring in the last few months throughout the northern hemisphere.
The scientific team was able to recover the data from our different seismometers, you will have to exploit them.

You will find in the documents a series of values corresponding on the left the acoustic data and on the right the time before the next earthquake.
Your goal is to design a Deep Learning model able to predict from a series of acoustic data the time before the next earthquake.

For this you will have to use a recurrent model (RNN).

# Manuel RNN :brain:

A RNN has the particularity to manage not simple data but sequences of data.
For that the model has in addition to its output layer a hidden layer.

<img src=".img/rnn-struct.png" />

This hidden layer allows you to keep data across several forwards allowing your model to have a notion of sequence.
Finally, to calculate the loss, it is important to remember that the loss is the sum of the loss of all the fowards in the same sequence.

# Instructions

- Save and load your dataset via numpy for easy use.
- Create an RNN model using only nn.Linear.
- Use data sequences of size 100
- Train the model until you have an average delta of 10% between your prediction and the label.
- Display a graph showing the evolution of the loss and the average delta.
- If you increase the size of your sequence, what happens? Why do you want to do this?

**few tips**
- The data is of shape `(-1, batch, sequence, data)`.
- La loss est calculé sur l'ensemble de la sequence.
  Ainsi sur une sequence $S$ de taille $5$: $$loss = l(S[0]) + l(S[1]) + l(S[2]) + l(S[3]) + l(S[4])$$

## Submit :trophy:

Fill differents files in ``src/`` folder

To submit your work, think about pushing your changes. It is important to push so that we are able to assess participation.

If you have any concerns, talk to a supervisor.

## Resources :book:

- [Dataset](https://www.kaggle.com/c/LANL-Earthquake-Prediction/data)
- [Slides RNN](https://docs.google.com/presentation/d/17-OeHgELG6fgAOvDLRmMl6MVpGYkANmSBcLcIVa_X70/edit?usp=sharing)
- [NLP from scratch (doc torch)](https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html)
- [numpy.save](https://numpy.org/doc/stable/reference/generated/numpy.save.html)
