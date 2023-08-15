## Dashboard

#### style.css

import လုပ်ထားတဲ့ဖိုင်တွေ။

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap');
@config "../../tailwind.dashboard.config.js";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

ပင်မ body ကြီးတစ်ခုလုံးကို flex နဲ့ထိန်းထားတယ်။
ပထမ flex ကို `w-72` ပေးပြီး၊ ဒုတိယ div ကို `flex-1` ပေးထားလိုက်တယ်။ `flex-1` ပေးထားရင် `w-72` hide တဲ့အချိန်ကျန်နေတဲ့flex ကလွတ်တဲ့နေရာကိုဝင်ယူသွားမယ်။
```
<div class="flex h-screen font-roboto"> 
    <div> 

    </div>

    <div> 

    </div>
</div>
```

