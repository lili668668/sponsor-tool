import React from 'react'
import format from 'date-fns/format'
import { Control, Controller, useWatch } from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import { TITLE } from '../App'
import { Form } from './Content'

interface PropTyps {
  control: Control<Form>
}

export const BENEFITS = (data: Form) => {
  if (data.level?.value === '鈦金級') {
    return `(1)  Logo 和公司介紹於 COSCUP 和 KCD 官網露出
(2)  COSCUP 社群網站宣傳
(3)  Logo 於會場報到區迎賓背板曝光
(4)  網站議程頁面廣告 (按贊助等級比重播出)
(5)  於 COSCUP 部落格刊登一篇文章
(6)  前夜派對飲料劵 4 張
(7)  徵才版面牆面贊助
(8)  Logo 與 COSCUP Logo 聯名於會場桌前露出
(9)  Keynote 演講廳垂吊布條
(10) 會前派對贊助 (與 COSCUP 聯名）
(11) 需要繳交的檔案：
    (I) 網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：
        (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩組（請詳見附件參考圖）
        (b) 圖片解析度解析度請設定在 72 dpi。
        (c) 色彩請用一般 RGB 色彩系統即可。
        (d) 為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。
    (II) 於 COSCUP 部落格刊登一篇文章：
        (a) 可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。
        (b) 繳交的檔案要請您至這個頁面撰寫： ${data.hackUrl}
        (c) 編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖
    (III) 上述檔案請於 ${format(data.textDeadline, 'yyyy-MM-dd')} 前提供`
  }
  if (data.level?.value === '鑽石級') {
    return `(1)  Logo 和公司介紹於 COSCUP 和 KCD 官網露出
(2)  COSCUP 社群網站宣傳
(3)  Logo 於會場報到區迎賓背板曝光
(4)  網站議程頁面廣告 (按贊助等級比重播出)
(5)  於 COSCUP 部落格刊登一篇文章
(6)  前夜派對飲料劵 2 張
(7)  大會點心區桌旗曝光
(8) 需要繳交的檔案：
    (I) 網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：
        (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）
        (b) 圖片解析度解析度請設定在 72 dpi。
        (c) 色彩請用一般 RGB 色彩系統即可。
        (d) 為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。
    (II) 於 COSCUP 部落格刊登一篇文章：
        (a) 可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。
        (b) 繳交的檔案要請您至這個頁面撰寫： ${data.hackUrl}
        (c) 編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖
    (III) 上述檔案請於 ${format(data.textDeadline, 'yyyy-MM-dd')} 前提供`
  }
  if (data.level?.value === '黃金級') {
    return `(1)  Logo 和公司介紹於 COSCUP 和 KCD 官網露出
(2)  COSCUP 社群網站宣傳
(3)  Logo 於會場報到區迎賓背板曝光
(4)  網站議程頁面廣告 (按贊助等級比重播出)
(5)  於 COSCUP 部落格刊登一篇文章
(6)  前夜派對飲料劵 1 張
(7) 需要繳交的檔案：
    (I) 網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：
        (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）
        (b) 圖片解析度解析度請設定在 72 dpi。
        (c) 色彩請用一般 RGB 色彩系統即可。
        (d) 為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。
    (II) 於 COSCUP 部落格刊登一篇文章：
        (a) 可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。
        (b) 繳交的檔案要請您至這個頁面撰寫： ${data.hackUrl}
        (c) 編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖
    (III) 上述檔案請於 ${format(data.textDeadline, 'yyyy-MM-dd')} 前提供`
  }
  if (data.level?.value === '白銀級' || data.level?.value === '青銅級') {
    return `(1)  Logo 和公司介紹於 COSCUP 和 KCD 官網露出
(2)  COSCUP 社群網站宣傳
(3)  Logo 於會場報到區迎賓背板曝光
(4)  網站議程頁面廣告 (按贊助等級比重播出)
(5) 需要繳交的檔案：
    (I) 網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：
        (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）
        (b) 圖片解析度解析度請設定在 72 dpi。
        (c) 色彩請用一般 RGB 色彩系統即可。
        (d) 為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。
    (II) 上述檔案請於 ${format(data.textDeadline, 'yyyy-MM-dd')} 前提供`
  }
  if (data.level?.value === '好朋友級') {
    return `(1)  Logo 和公司介紹於 COSCUP 和 KCD 官網露出
(2)  COSCUP 社群網站宣傳
(3)  Logo 於會場報到區迎賓背板曝光`
  }
  return ''
}

const BenefitField: React.FC<PropTyps> = (props) => {
  const { control } = props
  const level = useWatch({ control, name: 'level' })

  if (level?.value === '鈦金級') {
    return (
      <ol>
        <li>Logo 和公司介紹於 COSCUP 和 KCD 官網露出</li>
        <li>COSCUP 社群網站宣傳</li>
        <li>Logo 於會場報到區迎賓背板曝光</li>
        <li>網站議程頁面廣告（按贊助等級比重播出）</li>
        <li>於 COSCUP 部落格刊登一篇文章</li>
        <li>前夜派對飲料劵 4 張</li>
        <li>徵才版面牆面贊助</li>
        <li>Logo 與 COSCUP Logo 聯名於會場桌前露出</li>
        <li>Keynote 演講廳垂吊布條</li>
        <li>會前派對贊助（與 COSCUP 聯名）</li>
        <li>需要繳交的檔案：</li>
        <ol>
          <li>網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：</li>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩組（請詳見附件參考圖）</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
            <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
          </ol>
          <li>於 COSCUP 部落格刊登一篇文章：</li>
          <ol>
            <li>可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。</li>
            <li>
              <Box display="flex" alignItems="center">
                繳交的檔案要請您至這個頁面撰寫： 
                <Box paddingX={1} width={540}>
                  <Controller
                    name="hackUrl"
                    control={control}
                    render={(({ field }) => (
                      <TextField
                        fullWidth
                        label="hackmd 的連結"
                        size="small"
                        {...field}
                      />
                    ))}
                  />
                </Box>
              </Box>
            </li>
            <li>編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖</li>
          </ol>
          <li>
            <Box display="flex" alignItems="center">
              上述檔案請於
              <Box paddingX={1}>
                <Controller
                  name="textDeadline"
                  control={control}
                  render={(({ field }) => (
                    <DesktopDatePicker
                      label="檔案死限"
                      inputFormat="yyyy-MM-dd"
                      mask="____-__-__"
                      renderInput={(params) => <TextField size="small" {...params} />}
                      {...field}
                    />
                  ))}
                />
              </Box>
              前提供
            </Box>
          </li>
        </ol>
      </ol>
    )
  }

  if (level?.value === '鑽石級') {
    return (
      <ol>
        <li>Logo 和公司介紹於 COSCUP 和 KCD 官網露出</li>
        <li>COSCUP 社群網站宣傳</li>
        <li>Logo 於會場報到區迎賓背板曝光</li>
        <li>網站議程頁面廣告（按贊助等級比重播出）</li>
        <li>於 COSCUP 部落格刊登一篇文章</li>
        <li>前夜派對飲料劵 2 張</li>
        <li>大會點心區桌旗曝光</li>
        <li>需要繳交的檔案：</li>
        <ol>
          <li>網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：</li>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
            <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
          </ol>
          <li>於 COSCUP 部落格刊登一篇文章：</li>
          <ol>
            <li>可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。</li>
            <li>
              <Box display="flex" alignItems="center">
                繳交的檔案要請您至這個頁面撰寫： 
                <Box paddingX={1} width={540}>
                  <Controller
                    name="hackUrl"
                    control={control}
                    render={(({ field }) => (
                      <TextField
                        fullWidth
                        label="hackmd 的連結"
                        size="small"
                        {...field}
                      />
                    ))}
                  />
                </Box>
              </Box>
            </li>
            <li>編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖</li>
          </ol>
          <li>
            <Box display="flex" alignItems="center">
              上述檔案請於
              <Box paddingX={1}>
                <Controller
                  name="textDeadline"
                  control={control}
                  render={(({ field }) => (
                    <DesktopDatePicker
                      label="檔案死限"
                      inputFormat="yyyy-MM-dd"
                      mask="____-__-__"
                      renderInput={(params) => <TextField size="small" {...params} />}
                      {...field}
                    />
                  ))}
                />
              </Box>
              前提供
            </Box>
          </li>
        </ol>
      </ol>
    )
  }

  if (level?.value === '黃金級') {
    return (
      <ol>
        <li>Logo 和公司介紹於 COSCUP 和 KCD 官網露出</li>
        <li>COSCUP 社群網站宣傳</li>
        <li>Logo 於會場報到區迎賓背板曝光</li>
        <li>網站議程頁面廣告（按贊助等級比重播出）</li>
        <li>於 COSCUP 部落格刊登一篇文章</li>
        <li>前夜派對飲料劵 1 張</li>
        <li>需要繳交的檔案：</li>
        <ol>
          <li>網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：</li>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
            <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
          </ol>
          <li>於 COSCUP 部落格刊登一篇文章：</li>
          <ol>
            <li>可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。</li>
            <li>
              <Box display="flex" alignItems="center">
                繳交的檔案要請您至這個頁面撰寫： 
                <Box paddingX={1} width={540}>
                  <Controller
                    name="hackUrl"
                    control={control}
                    render={(({ field }) => (
                      <TextField
                        fullWidth
                        label="hackmd 的連結"
                        size="small"
                        {...field}
                      />
                    ))}
                  />
                </Box>
              </Box>
            </li>
            <li>編輯後，下載純 HTML 檔案給我們以便上稿，介面使用說明請詳見附件參考圖</li>
          </ol>
          <li>
            <Box display="flex" alignItems="center">
              上述檔案請於
              <Box paddingX={1}>
                <Controller
                  name="textDeadline"
                  control={control}
                  render={(({ field }) => (
                    <DesktopDatePicker
                      label="檔案死限"
                      inputFormat="yyyy-MM-dd"
                      mask="____-__-__"
                      renderInput={(params) => <TextField size="small" {...params} />}
                      {...field}
                    />
                  ))}
                />
              </Box>
              前提供
            </Box>
          </li>
        </ol>
      </ol>
    )
  }

  if (level?.value === '白銀級' || level?.value === '青銅級') {
    return (
      <ol>
        <li>Logo 和公司介紹於 COSCUP 和 KCD 官網露出</li>
        <li>COSCUP 社群網站宣傳</li>
        <li>Logo 於會場報到區迎賓背板曝光</li>
        <li>網站議程頁面廣告（按贊助等級比重播出）</li>
        <li>需要繳交的檔案：</li>
        <ol>
          <li>網站議程頁面廣告（按贊助等級比重播出），廣告規格如下：</li>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  一組（請詳見附件參考圖）</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
            <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
          </ol>
          <li>
            <Box display="flex" alignItems="center">
              上述檔案請於
              <Box paddingX={1}>
                <Controller
                  name="textDeadline"
                  control={control}
                  render={(({ field }) => (
                    <DesktopDatePicker
                      label="檔案死限"
                      inputFormat="yyyy-MM-dd"
                      mask="____-__-__"
                      renderInput={(params) => <TextField size="small" {...params} />}
                      {...field}
                    />
                  ))}
                />
              </Box>
              前提供
            </Box>
          </li>
        </ol>
      </ol>
    )
  }

  if (level?.value === '好朋友級') {
    return (
      <ol>
        <li>Logo 和公司介紹於 COSCUP 和 KCD 官網露出</li>
        <li>COSCUP 社群網站宣傳</li>
        <li>Logo 於會場報到區迎賓背板曝光</li>
      </ol>
    )
  }

  return (<div></div>)
}

export default React.memo(BenefitField)