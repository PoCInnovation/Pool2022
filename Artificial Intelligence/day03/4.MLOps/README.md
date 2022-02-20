# Module 12 : MLOps

<img src=".img/MLOPS-pipeline.png" alt="MLOps overview" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">

<br/>

This subject is written to be done by team **from two to three people**.

---

## Introduction

After all those lessons, I think its time for your to go deeper on how to concretly use and deploy a machine learning model.

You viewed how can create Machine Learning models solve real case study but you've done it i a nice and cleaned environement with low contraint on how to use and build your model, like in a sandbox.

When working on real project with multiple engineers working on the same project you need to think everything differents. You want your collegue able to reproduce the same experiments as you, create new ones and share it easly.

This is where come into place the MLOps (contraction of Machine Learning and DevOps).

Think the MLOps as a set of practices that aim to develop and maintain machine learning models in production in a reliable and efficient manner.

In this context, you will have to create an all-in-one machine learning pipeline from fetching the data to training your model.

**WARNING:** This subject it much less guided compared to the previous ones, don't panic, take your time, ask questions and work together.

<br>

## Objective

As described below, you will have to create a machine learning pipeline that will be able to predict the cover type of a forest.

Here are some informations about the dataset:

<div style="padding-left: 30px;">
    <cite>Natural resource managers responsible for developing ecosystem management strategies require basic descriptive information including inventory data for forested lands to support their decision-making processes.  However, managers generally do not have this type of data for inholdings or neighboring lands that are outside their immediate jurisdiction.  One method of obtaining this information is through the use of predictive models.</cite>
    <br/>
    <br/>
    <cite>Predicting forest cover type from cartographic variables only (no remotely sensed data). The actual forest cover type for a given observation (30 x 30 meter cell) was determined from US Forest Service (USFS) Region 2 Resource Information System (RIS) data. Independent variables were derived from data originally obtained from US Geological Survey (USGS) and USFS data. Data is in raw form (not scaled) and contains binary (0 or 1) columns of data for qualitative independent variables (wilderness areas and soil types).</cite>
</div>

<br/>


Name                                    | Data Type       | Measurement                  | Description
----------------------------------------|-----------------|------------------------------|--------------------------------------------------
Elevation                               | quantitative    | meters                       | Elevation in meters
Aspect                                  | quantitative    | azimuth                      | Aspect in degrees azimuth
Slope                                   | quantitative    | degrees                      | Slope in degrees
Horizontal_Distance_To_Hydrology        | quantitative    | meters                       | Horz Dist to nearest surface water features
Vertical_Distance_To_Hydrology          | quantitative    | meters                       | Vert Dist to nearest surface water features
Horizontal_Distance_To_Roadways         | quantitative    | meters                       | Horz Dist to nearest roadway
Hillshade_9am                           | quantitative    | 0 to 255 index               | Hillshade index at 9am, summer solstice
Hillshade_Noon                          | quantitative    | 0 to 255 index               | Hillshade index at noon, summer soltice
Hillshade_3pm                           | quantitative    | 0 to 255 index               | Hillshade index at 3pm, summer solstice
Horizontal_Distance_To_Fire_Points      | quantitative    | meters                       | Horz Dist to nearest wildfire ignition points
Wilderness_Area (4 binary columns)      | qualitative     | 0 (absence) or 1 (presence)  | Wilderness area designation
Soil_Type (40 binary columns)           | qualitative     | 0 (absence) or 1 (presence)  | Soil Type designation
Cover_Type (7 types)                    | integer         | 1 to 7                       | Forest Cover Type designation

<br>

## Data Version Control
<img src=".img/dvc_icon-color--square_vector.png" alt="dvc logo" style="display: block; margin-left: auto; margin-right: auto; width: 20%;">

<br/>

First of all before starting you need data. Only one member of your team will have access to the original data file, it will be its job to share it across the team.

So how can you do that? Should we send it by mail? Using discord? WeTransfer?\
Well.. All of those solutions works but now imagine you need to change this data, will you send it again everytime?

The real question is how can we handle the multiple version of our data?
Well, for that there is a tool well named [DVC](https://dvc.org) (Data Version Control).

DVC allow you to store your data on a remote storage and link it to a specific version of your code, let's do it!

Upload your data to a remote storage (S3, Gdrive, SSH, etc) and share it across your team.\
(It's not because only one member of your team will have access to the data that he will be the only one to work, help him!)

<br/>

## Data exploration
Now that you have your data you should take the time to explore it, to understand its meaning and determine wich column will be usefull for your predictions.

You're totally free regarding the tools to use, if you want to use a notebook, R-lang, or a magnifying glass, do it!

You should be able to:
- Understand the data
- Identify the features and the target
- Identify the missing values if any
- Identify the categorical features
- Identify the features with high correlation

<br/>

## Drop columns
Your determined wich columns to drop, now let's create a python script that will load your csv file, drop the columns you decided to and save the resulting DataFrame into a filed name whatever you want.

<br/>

## Normalize
<img src=".img/data-normalization.png" alt="data normalization" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">

<br/>

You may now be familiare with the concept of normalization, right ? Right..?\
Normalizing your data is a simple but crucial, it significantly help your model to converge to a global minima/maxima.

Let's create a new python script to normalize your data and save it to a new csv file (again named whatever you want).

**WARNING:** Don't forget to save your normalization params, you will need it if you want to deploy your model later.

<br/>

## Over-represented classes
As you might have seend earlyer some classes or under/overrepresented and as you should know, it quite risky do lets your data as it.

You need to choose a maximume number of occurence for each class to reduced your csv file to respect this maximume occurence.

Again, create a new python script to do that and save your result to a new csv file.

**Exemple:**

If you decided to set your treshold equal to 200, your data will look like this.

|             | nb class X | nb class Y | nb class Z |
| :---:       | :---:      | :---:      | :---:      |
| Before drop | 301        | 183        | 730        |
| After drop  | 200        | 183        | 200        |

<br/>

## Create tensors

Now that your data is clean and normalized, you cast it into tensors.

Create a new python script that will load your csv and save it into a file ending with the `.pt` extension.

<br/>

## DVC - Pipeline

<img src=".img/dvc-dag.png" alt="dvc pipeline" style="display: block; margin-left: auto; margin-right: auto; width: 20%;">

<br/>

Before going futher, let me ask a question: Are you not tired of re-running your all pipeline every time you need to change your data or find a mistake in your previous scripts? (If not you should be!)

Well, once again DVC has a well named solution for you : [pipeline](https://dvc.org/doc/start/data-pipelines).

Implement a dvc pipeline containing all of your previous steps and for every incoming step, don't forget to add it to your pipeline.

<br/>

## Class Dataset & Dataloader

<img src=".img/dataloader.png" alt="dataloader" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">

<br/>

For multiple reasons, you may need to load your data into a [Dataset](https://pytorch.org/docs/stable/data.html#dataset-api) and [DataLoader](https://pytorch.org/docs/stable/data.html#dataloader-api).

DataLoader allow you to load your data in batches, to shuffle them, to use multiple workers to load your data faster and many more.\
Let's create your Dataset class and a function to create a DataLoader from it.

<br/>

## Sets : Train, test & valide

Has you know, you will also need a testing and validation set to evaluate your model.\
Let's create a function that given a data, return you three dataloader (train, val, test).

<br/>

## Model
You can now create your model!

You will not have any futher information regarding the layers you need to use or anything regarding your model (except that obviously you need to use [PyTorch](https://pytorch.org/)).

<br/>

## Train & Test
Time to train your model! 🎉

Add a new step to your pipeline to train and test your model.\
(Don't forget to save your model, you will need it to deploy your model later.)

<br/>

## Hydra - Config File

<img src=".img/Hydra-Readme-logo.png" alt="hydra logo" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">

<br/>

Let me guess, have you hard-coded your parameters (data path, hp, model path...)?\
Probably yes...

I might have a solution for you: [Hydra](https://github.com/facebookresearch/hydra).

Let's use hydra to create three config file:
1. To handle your data (path, columns, preprocessing)
2. To choose every params regarding your ressources: device, number of epochs, batch size
3. To handle everything regarding your training step (except hyperparams): callbacks, plots...

<br/>

Some of you may ask why I mentioned callbacks? Well, remember that your are free to be as creative as you want in your project!

## Hydra - Logging

Imagine your are now running your project on a server for multiple days and a crash occures. How to know when does that come from?

here is where come in place the logs! Let's use hydra to had logs to your pipeline.

<br/>

## Hydra - Optuna

<img src=".img/optuna.png" alt="optuna logo" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">

<br/>

You may not know but there are tools to help choose wich hyperparams to use. One I personally recommend is [Optuna](https://optuna.org) and the good new is that Hydra support Optuna as a [buil-in package](https://hydra.cc/docs/plugins/optuna_sweeper/)!

You should give it a try!

## Conclusion

Congratulations, you have now a clean and well structured project! But you still need to do a lot of things to be able to deploy your model like: Pruning, freezing, quantization, serving...

You are free to do it!
