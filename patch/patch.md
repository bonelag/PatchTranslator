# Overlay Text Translate Patch Guide

Tài liệu này mô tả cách dùng patch để áp lại toàn bộ chỉnh sửa tính năng **overlay text translate** vào các bản cập nhật mới của code gốc.

## 1) File patch đã xuất

- Patch chính: [overlay_text_translate.patch](overlay_text_translate.patch)
- Base commit lúc xuất patch: `ec8aba7`
- Bản sao file mới: [new_files/src/LunaTranslator](new_files/src/LunaTranslator)

Patch này bao gồm:
- OCR trả về text kèm toạ độ (`[x y|w h]`)
- Overlay hiển thị text theo box OCR
- Trang setting cho overlay
- Hotkey bật/tắt overlay và đóng toàn bộ overlay
- TTS `selfbuild`
- Bổ sung key dịch overlay cho toàn bộ file ngôn ngữ trong `src/files/lang/*.json`
- Các thay đổi liên quan `SnippingTool`, `baseocrclass`, `ocrutil`, UI

Các file mới cũng đã được copy sẵn để tham chiếu/khôi phục nhanh:
- [new_files/src/LunaTranslator/ovl.py](new_files/src/LunaTranslator/ovl.py)
- [new_files/src/LunaTranslator/gui/setting/display_overlay.py](new_files/src/LunaTranslator/gui/setting/display_overlay.py)
- [new_files/src/LunaTranslator/tts/selfbuild.py](new_files/src/LunaTranslator/tts/selfbuild.py)

## 2) Cách áp patch vào bản code mới

> Thực hiện trong root repo (thư mục chứa `.git`).

### Bước A: cập nhật code gốc
1. Checkout branch cần cập nhật.
2. Pull/merge code mới từ upstream.

### Bước B: áp patch

```powershell
git apply --3way --index patch/overlay_text_translate.patch
```

Giải thích nhanh:
- `--3way`: cố gắng tự merge khi context lệch nhẹ
- `--index`: cập nhật luôn vào index (staging)

Nếu chỉ muốn test trước khi apply:

```powershell
git apply --check patch/overlay_text_translate.patch
```

## 3) Nếu có conflict

Thử theo thứ tự:

1. Chạy với reject để lấy phần không apply được:

```powershell
git apply --reject --whitespace=fix patch/overlay_text_translate.patch
```

2. Sửa thủ công các file `.rej`/vùng conflict.
3. Kiểm tra lại build/chạy app.
4. Stage + commit.

## 4) Kiểm tra sau khi áp patch

Khuyến nghị kiểm tra nhanh:
- File overlay core tồn tại: [src/LunaTranslator/ovl.py](../src/LunaTranslator/ovl.py)
- Setting overlay tồn tại: [src/LunaTranslator/gui/setting/display_overlay.py](../src/LunaTranslator/gui/setting/display_overlay.py)
- TTS selfbuild tồn tại: [src/LunaTranslator/tts/selfbuild.py](../src/LunaTranslator/tts/selfbuild.py)
- UI có tab `OverlaySetting`
- Hotkey có `_52` và `_53`
- Các file ngôn ngữ có key: `OverlaySetting`, `ovlEnable`, `ovlTextColor`, `ovlTextOpacity`, `ovlStrokeColor`, `ovlBackColor`, `ovlStrokeWidth`, `ovlBoxExpansion`, `ovlTextSizeMin`, `ovlTextSizeMax`, `ovlTextFont`, `ovlPaddingH`, `ovlPaddingV`, `ovlTimeout`, `开关`, `关闭所有`

Có thể dùng:

```powershell
git status
git diff --name-only
```

## 5) Rollback nếu cần

Nếu patch vừa apply nhưng chưa commit:

```powershell
git reset --hard
git clean -fd
```

## 6) Khuyến nghị duy trì lâu dài

- Mỗi khi bạn nâng cấp patch, hãy tạo lại file `overlay_text_translate.patch` từ trạng thái mới.
- Nên giữ patch trong branch riêng (ví dụ `feature/overlay-patch`) để dễ rebase theo upstream.
- Nếu upstream thay đổi mạnh ở OCR/UI, ưu tiên re-implement theo patch.md thay vì cố apply tự động 100%.

### Cách tạo lại patch chính xác (khuyến nghị)

Nếu có file mới (untracked) như `ovl.py`, `display_overlay.py`, hãy chạy thêm bước intent-to-add trước khi xuất patch, để patch chứa luôn phần `new file mode`:

```powershell
git add -N src/LunaTranslator/ovl.py src/LunaTranslator/gui/setting/display_overlay.py
git diff --output=patch/overlay_text_translate.patch -- src/LunaTranslator src/files/lang
```

---

Ngày tạo tài liệu: 2026-02-15
