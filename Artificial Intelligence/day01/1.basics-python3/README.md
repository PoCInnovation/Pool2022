# Module 1: Basics Python :pencil:

Welcome to this week of training on the theme of Artificial Intelligence. The different modules have been made with passion by the members of PoC, and will accompany you in your learning.

I invite you to ask for help to the different staff if you don't know in which direction to go. The goal is that you learn as much as possible in order to have a vision of what is done in AI.

In this first topic you will discover the programming language Python3, very used in AI thanks to its libraries like TensorFlow or PyTorch which allow to create neural networks easily with an abstraction of mathematics.

The objective of this module is to learn how to use it through the exercises that PoC members have written. The modules have been designed to be of increasing difficulty, and the pool format has been designed so that no one will be able to finish 100% every day. Take the time to understand the concepts and read the documentation, but my best advice is that you should not give up, AI is a complex, mathematical field and requires rigor, so the staff wishes you the best, and again do not hesitate to ask for help.

## Python3 :snake:

Python is a high-level interpreted language, which has become very popular in the academic and scientific community for its simplicity and its layer of abstraction of several rules of computer science, such as the fact that you don't need to type your variatiobles. Python is also able to interpret different programming paradigms like imperative, object-oriented...

So you may ask yourself: Why do we use Python which is slower than C/C++ for AI, a domain that requires a lot of resources?
Well, quite simply, libraries like TensorFlow work with a Python interface on the surface but use the C++ language behind.

### Exemple

> Function "Hello World"

```py
def myFunc(name="Undefined"):
""" A function is defined using the keyword `def` followed by a space
and the name of the function, between brackets we put the different parameters
for the example we have the parameter `name` which by default is equal to Undefined.
 This comment is a docstring of the function I let you look for what it corresponds.

Args:
    name: name of the user

Returns:
    None
"""
    print("Hello " + name)

# myFunc() will display "Hello Undefined"
# myFunc("PoC") will display "Hello PoC"

```

## Submit :trophy:

Fill the notebook : ``basesPython.ipynb``

To submit your work, think about pushing your changes. It is important to push so that we are able to assess participation.
If you have any concerns, talk to a supervisor.

## Resources :book:

 - [Python3 Documentation](https://docs.python.org/3/)
 - [Why Python3 more than C++ ?](https://fr.quora.com/Pourquoi-Python-est-tr%C3%A8s-utilis%C3%A9-en-IA-Big-Data-alors-quil-nest-pas-le-plus-performant-en-rapidit%C3%A9-de-calcul)
 - [Python3 courses](https://courspython.com/introduction-python.html)
 - [Python3 Machine Learnia](https://www.youtube.com/watch?v=82KLS2C_gNQ)
