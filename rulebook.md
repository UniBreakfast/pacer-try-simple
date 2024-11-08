# [pacergame-rulebook-with-gpt](https://github.com/UniBreakfast/pacergame-rulebook-with-gpt)

# PacerGame (PG) Rulebook

## 1. Introduction

Welcome to **PacerGame**, a gamified self-improvement system designed to help you become a confident and accomplished individual. PacerGame empowers you to build strong and consistent momentum toward personal growth, creating and strengthening a tendency to achieve goals and fulfill desires. By engaging in meaningful activities aligned with your personal endeavors, you earn Confidence Points (CP) that fuel your progress and unlock new challenges.

## 2. Key Concepts

### 2.1 Endeavors (ES)

- **Definition:** Overarching areas of interest such as goals, dreams, desires, needs, skills to develop, knowledge to acquire or deepen, or habits to build or break.

- **Purpose:** Provide direction and focus for selecting activities and help evaluate overall progress in achieving desired outcomes.

### 2.2 Activities (AS)

- **Definition:** Specific tasks with clearly defined amounts in appropriate units and subjectively estimated difficulty levels.

- **Purpose:** Serve as a basis for quests to facilitate the pursuit of specific endeavors.

### 2.3 Quests (QS)

- **Definition:** Commitments to perform a specific activity daily over a set duration, with CP pledged as a stake.

- **Purpose:** Provide structured challenges that encourage consistency and dedication, tracking effort investment and reported progress.

### 2.4 Todos (TS)

- **Definition:** Daily tasks within a quest that require the completion of the activity's specific amount.

- **Purpose:** Break down quests into manageable daily actions, fostering daily engagement and progress toward endeavors.

### 2.5 Confidence Points (CP)

- **Definition:** The in-game measurable resource representing your confidence and progress, used to pledge when initiating quests and earned by completing todos.

- **Purpose:** Motivate commitment and accountability, providing a risk-reward system that incentivizes consistent effort.

### 2.6 Inertia

- **Definition:** The phase after completing a quest, allowing continuation of reported progress of the same activity with daily rewards but without pledging additional CP. Why stop if you feel like you can keep going?

- **Purpose:** Allow for momentum and consistency without the risk of a loss of pledged CP as it is already returned. Squeze out more rewards for completing more todos in the same quest. 

## 3. Game Mechanics

### 3.1 Activities (AS)

- **Creation:**

  - When adding an activity, be as specific as you need—not too broad (to avoid tempting yourself to be dishonest), not too stringent (to prevent overwhelm). Specify an exact amount using appropriate units such as minutes, pages, kilometers, or any other relevant measure. This defines the exact requirement for the activity.

- **Difficulty Assignment:**

  - Assign a subjective difficulty level from 1 to 10, considering the specific amount you've set for the activity.

- **Modification Rules:**

  - Activities cannot be modified while associated quests are active.

  - After quests conclude, modifications are allowed but do not retroactively affect past quests or calculations.

### 3.2 Confidence Points (CP)

- **Initial CP Assessment:**

  - At the start of the game, assess your confidence level from 2 to 10 to determine your starting CP.

  - **Note:** If your confidence level is less than 2, consider seeking guidance from a qualified professional before starting.

- **Earning CP:**

  - Gain CP upon completing each todo, calculated as `floor(√n)`, where `n` is the current consecutive day count within the quest and any unbroken sequence of quests for the same activity (excluding days from inertia).

  - All completed todo rewards are immediate.

- **Spending CP:**

  - Spend CP equal to the quest's cost when initiating new quests by pledging CP.

- **Starting Over:**
  
  - Re-estimation of initial CP is allowed if you reach 0 CP with no active quests.

  - It is also recommended to start over after an extended break from the game.

### 3.3 Quests (QS)

- **Starting a Quest:**

  - Select an activity from your list to form the basis of the quest.

  - Decide when the quest begins—today (only for quests longer than one day), tomorrow, or the day after.

  - Decide the quest's duration in days, based on your goals and available CP.

  - Calculate the quest cost: `Quest Cost = Activity Difficulty × Quest Duration`.

  - Pledge CP equal to the quest's cost to initiate it.

  - No overlapping quests for the same activity are allowed.

- **Todos and Completion:**

  - Complete the activity's specific amount each day.

  - Honestly confirm completion of each todo.

  - Gain CP upon completing each todo, calculated as `floor(√n)`, where `n` is the current consecutive day count within the quest and any unbroken sequence of quests for the same activity (excluding days from inertia). The maximum reward per todo is capped by the activity's difficulty at the time the quest is taken.

- **Quest Failure:**

  - Explicitly report any failure to complete a todo.

  - **Consequences of Failure:**

    - Lose pledged CP upon quest failure.

    - Increase the activity's difficulty by 1 (can exceed 10) if the quest duration was equal to or longer than your initial confidence level and quest was failed after at least one day of todo completion.

    - Days of completed and failed todos of a finished quest cannot overlap with another quest for the same activity.

    - Remaining todos from the failed quest are discarded and cannot be reported or rewarded.

- **Quest Completion:**

  - Upon completing the quest, get your pledged CP returned.

  - Decrease the activity's difficulty by 1 (not below 1) if the quest duration was equal to or longer than your initial confidence level.

  - Option to continue the activity in the inertia phase.

  - A quest is considered finished if it is either completed or failed, even if inertia continues.

### 3.4 Inertia

- **Rules:**

  - Continue performing the same activity with the same specific amount daily.

  - Maintain your consecutive day count for the purpose of continuing the activity, but note that days in inertia are not counted towards reward calculations in future quests.

- **Rewards:**

  - CP Reward per Todo remains constant during inertia, equal to the reward on the last day of the quest.

- **Overlapping with New Quests:**

  - No Overlaps Allowed. Reported todo days of inertia cannot overlap with new quest days.

  - If you choose to start a new quest that would overlap with unreported inertia days, those unreported days are discarded.

- **Breaking the Streak:**

  - No CP losses upon ending inertia since the pledge was already returned.

  - If you miss a day, the streak ends, and your consecutive day count is reset.

### 3.5 Streaks and Consecutive Days

- **Consecutive Day Count:**

  - Within a Quest days are counted consecutively for reward calculation.

  - If you start a new quest for the same activity without missing a day (excluding days from inertia), the consecutive day count continues from where it left off at the end of the last quest.

  - **Excluding Inertia Days:** Days spent in the inertia phase are **not** counted towards the consecutive day count for reward calculations in new quests.

- **Starting New Quests Without Breaking Streaks:**

  - Seamless Transition - if you start a new quest for the same activity on the next day after completing a quest or inertia phase without missing a day, your day count for reward calculation resumes from the end of the last quest (excluding inertia days).

  - **Reward Calculation:** The first day's todo in the new quest is considered the next in sequence from the last quest day count (e.g., if the last quest ended on day 8, the new quest starts at day 9 for reward purposes).

## 4. Guidelines and Principles

### 4.1 Honesty and Integrity

- Be truthful about completing todos and reporting failures.

- Accurately assess activity difficulties based on the specific amounts.

### 4.2 Risk and Reward

- **Commitment Incentive:** Pledging CP encourages commitment.

- **Consequences of Failure:** Loss of pledged CP and potential increase in activity difficulty.

- **Opportunity for Growth:** Use failures to reassess and adjust strategies.

### 4.3 Longer, Harder, More Quests

- The more confidence you gain, the more quests you can initiate concurrently.

- The harder they can be in terms of activity difficulty

- The longer they can be in terms of quest duration in days.

## 5. Progression and Growth

- Accumulate CP by completing quests and maintaining streaks.

- Start new quests to rebuild your CP balance after failure.

- Regularly completing activities contributes to progress in your chosen endeavors.

## 6. Customization and Flexibility

- You can add new activities at any time, specifying the exact amount and appropriate units.

- Modifying Activities is not allowed during quests. It is allowed after quests conclude without retroactive effects.

- Quest duration and difficulty cannot be altered once initiated.

## 7. Final Notes

- The system motivates by rewarding consistency and introducing risks of loosing the confidence you have built up over time. And who wants to loosethat? You certainly don't.

- Balance quest difficulty and number with your real-life capacities to avoid overcommitment. 

- Add recreative activities for rest and refreshment and take quests in those areas if you feel like you've pushed your limits too far.

- View setbacks as learning opportunities.

- Sharing progress with others can provide additional motivation and accountability. But you don't have to.

---

"*A journey of a thousand miles begins with a single step*"
