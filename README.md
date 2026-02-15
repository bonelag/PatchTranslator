# LunaTranslator

Lightweight game text translator for Windows with HOOK, OCR, clipboard, TTS, and multi-engine translation support.

## Download

| OS | 64-bit |
| - | - |
| Windows 10 & 11 | <downloadbtn href="https://lunatranslator.org/Resource/DownloadLuna/x64_win10?doc=1"/> |

::: details Legacy OS Compatibility Version

>[!WARNING]
Legacy builds are slower, less stable, and may have missing features. They are also more likely to be flagged by antivirus software. Use only when required.

| OS | 32-bit | 64-bit |
| - | - | - |
| Windows 7 or later | <downloadbtn href="https://lunatranslator.org/Resource/DownloadLuna/x86_win7?doc=1"/> | <downloadbtn href="https://lunatranslator.org/Resource/DownloadLuna/x64_win7?doc=1"/> |
| Windows XP & Vista | <downloadbtn href="https://lunatranslator.org/Resource/DownloadLuna/x86_winxp?doc=1"/> | |

:::

## Quick Start

1. Download and extract to any writable folder.
2. Start the app.
3. Select your text source (HOOK / OCR / Clipboard) and translation engines.

::: warning
Do not place the application in protected paths such as **C:\Program Files**. It may fail to save config/cache or fail to run correctly.
:::

### Launch Modes

- **LunaTranslator.exe**: normal mode (recommended)
- **LunaTranslator_admin.exe**: elevated mode (only when a game requires admin-level hook/injection)
- **LunaTranslator_debug.bat**: starts with console logs for troubleshooting

## Update Policy

- Auto-update is enabled by default.
- If auto-update fails, manually download a new package and overwrite the old directory.

::: warning
Do not delete `userconfig` if you want to keep your settings.
:::

## Security & Antivirus Notes

HOOK mode requires DLL injection into target processes. Some antivirus products may flag related files (for example `shareddllproxy32.exe`, `LunaHost32.dll`) as suspicious.

Builds are produced automatically by GitHub Actions:
- https://github.com/HIllya51/LunaTranslator/actions

If files are quarantined:
1. Add the LunaTranslator folder to AV exclusions.
2. Re-download and re-extract.

::: details Windows Defender exclusion path
“Virus & threat protection” -> “Exclusions” -> “Add or remove exclusions” -> “Add an exclusion” -> “Folder”, then choose LunaTranslator folder.

![img](https://image.lunatranslator.org/zh/cantstart/4.png)
![img](https://image.lunatranslator.org/zh/cantstart/3.png)
:::

## Common Errors {#anchor-commonerros}

### Missing Important Components / Missing embedded Python3

::: danger
Most cases are caused by antivirus quarantine.
:::

![img](https://image.lunatranslator.org/zh/cantstart/2.jpg)
![img](https://image.lunatranslator.org/zh/missingpython.png)

Fix:
1. Add folder exclusion in antivirus.
2. Re-download and re-extract.

### Waiting for the DLL to be injected into the game... {#anchor-waitdll}

Same root cause and fix as above.

### Error/FileNotFoundError

Some runtime files were removed after startup (usually by antivirus). Add exclusion, then re-download/re-extract.

<img src="https://image.lunatranslator.org/zh/notfound.png" width=400>

### Error/PermissionError

Usually caused by running inside protected directories (for example `C:\Program Files`). Move the folder to a normal writable path.

<img src="https://image.lunatranslator.org/zh/cantstart/6.png" width=400>

## Support

- User docs: https://lunatranslator.org
- Issues: https://github.com/HIllya51/LunaTranslator/issues
