## Dashboard

#### style.css

CSS file မှာ config လုပ်ရမယ့်ဖိုင်တွေ။

```
@config "../../tailwind.dashboard.config.js";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- ပင်မ body ကြီးတစ်ခုလုံးကို flex နဲ့ထိန်းထားတယ်။
- ပထမ flex ကို `w-72` ပေးပြီး၊ ဒုတိယ div ကို `flex-1` ပေးထားလိုက်တယ်။ `flex-1` ပေးထားရင် `w-72` hide တဲ့အချိန်ကျန်နေတဲ့flex ကလွတ်တဲ့နေရာကိုဝင်ယူသွားမယ်။


#### Layout Plan
```
<div class="flex h-screen font-roboto"> 
    <div class="absolute left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden  duration-300 ease-linear lg:static "> 
        aside - lg:translate-x-0 -translate-x-full
            sidebar header -  flex items-center justify-between 
            sidebar menu - flex flex-col overflow-y-auto duration-300 ease-linear
    </div>

    <div class="relative flex flex-1 flex-col overflow-x-hidden"> 
         header - sticky top-0 flex w-full z-999
         content - overflow-y-auto overflow-x-hidden
    </div>
</div>
```
- Sidebar ဘက်အခြမ်း
    - aside က အဝင်အထွက်ကိုထိန်းမယ်။
    - sidebar header က Dashboard အပေါ်ပိုင်းကိုထိန်းမယ်။
    - sidebar menu က List တွေကိုထိန်းမယ်။

- Menu ဘက်အခြမ်း
    - header က fixed ထားမယ်။
    - content က scroll ဆွဲလို့ရအောင်ထားတယ်။