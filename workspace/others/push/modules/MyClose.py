import pyautogui


class MyClose():
    def CloseAll():

        pyautogui.hotkey('ctrl', 'k')
        pyautogui.hotkey('ctrl', 'w')

    def Terminal():
        pyautogui.hotkey('ctrl', 'j')

    def Target(number):
        pyautogui.hotkey('alt', f'{number}')

    def ScrollBar():
        pyautogui.hotkey('ctrl', 'shift', 'e')
        pyautogui.hotkey('ctrl', 'b')


    def CollapseFolders():
        pyautogui.hotkey('ctrl', 'shift', 'e')
        # Ấn và giữ phím "Ctrl"
        pyautogui.keyDown('ctrl')
        # Ấn phím mũi tên bên trái
        pyautogui.press('left')
        # Thả phím "Ctrl"
        pyautogui.keyUp('ctrl')
