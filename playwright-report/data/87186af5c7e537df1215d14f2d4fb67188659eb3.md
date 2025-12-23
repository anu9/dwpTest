# Page snapshot

```yaml
- generic "Login Page" [ref=e4]:
  - generic "Login" [ref=e5]:
    - heading "Login" [level=2] [ref=e6]
    - form [ref=e7]:
      - generic [ref=e8]:
        - generic "Enter your username" [ref=e9]: Username
        - textbox "Enter your username" [ref=e10]
      - generic [ref=e11]:
        - generic "Enter your password" [ref=e12]: Password
        - textbox "Enter your password" [ref=e13]
        - button "Show password" [ref=e14] [cursor=pointer]: Show
      - button "Submit login" [ref=e15] [cursor=pointer]: Log In
```