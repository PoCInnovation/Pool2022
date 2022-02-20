# Actor-Critic

Congratulations on making it this far today. (for real, these subjects are tough)

For this last mission, you have to [Breakout-V0](https://gym.openai.com/envs/Breakout-v0/) from [OpenaiGym](https://gym.openai.com/) using Actor-Critic methods.

**The implementation is up to you**, you are on your own on this one.\
You allowed to reuse the code from the previous subject and adapt it to Actor-Critic methods.

Below are some guidance to help you on your quest.

---
## Stacking Frames

When playing on video games environments, the common way of making the Agent "see" what's going on is to feed it the pixel values of the rendered game (that's what the observations of the Breakout-V0 environment is like).\
The problem with this method is that a single frame doesn't allow us to know some crucial information on some environment. Let's take a look at our breakout environment; a single frame is not enough to know the direction the ball is going, the agent cannot take a decision because he doesn't have any sense of time, he doesn't know what was the state a frame earlier.\
A common solution that is sufficient for solving environments like atari games is to feed our network multiple consequent frames at once.\
Instead of feeding the network a single frame, we feed the network the last 4(or more) frames (ie. the last 4 observations). That way, the Agent will clearly be able to see in which way the ball is going and take an action in consequence.

Content:
* [Atari - Solving Games with AI](https://gsurma.medium.com/atari-reinforcement-learning-in-depth-part-1-ddqn-ceaa762a546f)

## Policy Gradient

Policy gradient is another category of Reinforcement Learning, different from Q-Learning.\
In Q-Learning methods, we estimate the value of an action given a state, then we pick the best action according to the estimated values. We say that the policy is **infered**.\
However in Policy Gradient methods, we directly optimize the policy of the Agent. (ie. the action the Agent takes)

Content:
* [Deep Q Network vs Policy Gradient](https://flyyufelix.github.io/2017/10/12/dqn-vs-pg.html)
* [How Policy Gradient Reinforcement Learning Works](https://www.youtube.com/watch?v=A_2U6Sx67sE)

## Actor-Critic Methods

Actor-Critic methods merges the concepts of Q-Learning and Policy Gradient together to try getting the best out of the 2 methods.
The Agent is composed of two main part:
* The Actor (Policy Gradient): takes the state as input and select the best action; it controls the behaviour of the Agent.
* The Critic (Q-Learning): evaluates the action taken.

By competing against each other, these two part will become better and better at what they do, resulting in an Agent learning much faster than any of the 2 methods separately.

Content:
* [The idea behind Actor-Critics and how A2C and A3C improve them](https://theaisummer.com/Actor_critics/)
* [Everything You Need To Master Actor Critic Methods](https://www.youtube.com/watch?v=LawaN3BdI00)

---
Author: [Nell Fauveau](http://www.github.com/Nellousan)
