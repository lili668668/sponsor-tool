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
  if (data.level?.value === '黃金級') {
    return `(1)  Logo 於 ${TITLE} 官方網站露出及公司介紹。Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。
    (2)  活動會場報到區歡迎背板上 Logo 露出。
    (3)  COSCUP 官方社群網站推廣乙方贊助事宜。
    (4)  網站議程頁面廣告（依照贊助等級比重播出），網頁廣告檔案請於 ${format(data.adDeadline, 'yyyy-MM-dd')} 前提供，廣告規格如下：
      (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩種（請詳見附件參考圖）
      (b) 請提供 .png/ .ai 檔案，ai 檔的圖片請 “內嵌”、文字請一定要“建立外框”。
      (c) 圖片解析度解析度請設定在 72 dpi。
      (d) 色彩請用一般 RGB 色彩系統即可。
    (5)  為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。
    (6)  於 COSCUP 官方部落格露出一篇文章。
    可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。繳交的檔案要請您至這個頁面撰寫：https://hackmd.io 編輯後，下載純 HTML 檔案給我們以便上稿。`
  }
  if (data.level?.value === '青銅級') {
    return `(1)  Logo 於 ${TITLE} 官方網站露出及公司介紹。
    （Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。）
    (2)  活動會場報到區歡迎背板上 Logo 露出。
    (3)  COSCUP 官方社群網站推廣乙方贊助事宜。
    (4)  網站議程頁面廣告（依照贊助等級比重播出），網頁廣告檔案請於 ${format(data.adDeadline, 'yyyy-MM-dd')} 前提供，廣告規格如下：
      (a) 網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩種（請詳見附件參考圖）
      (b) 請提供 .png/ .ai 檔案，ai 檔的圖片請 “內嵌”、文字請一定要“建立外框”。
      (c) 圖片解析度解析度請設定在 72 dpi。
      (d) 色彩請用一般 RGB 色彩系統即可。
    (5)  為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。`
  }
  if (data.level?.value === '好朋友級') {
    return `(1)  Logo 於 ${TITLE} 官方網站露出及公司介紹。Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。
    (2)  活動會場報到區歡迎背板上 Logo 露出。
    (3)  COSCUP 官方社群網站推廣乙方贊助事宜。`
  }
  return ''
}

const BenefitField: React.FC<PropTyps> = (props) => {
  const { control } = props
  const level = useWatch({ control, name: 'level' })

  if (level?.value === '黃金級') {
    return (
      <ol>
        <li>Logo 於 {TITLE} 官方網站露出及公司介紹。Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。</li>
        <li>活動會場報到區歡迎背板上 Logo 露出。</li>
        <li>COSCUP 官方社群網站推廣乙方贊助事宜。</li>
        <li>
          <Box display="flex" alignItems="center">
            網站議程頁面廣告（依照贊助等級比重播出），網頁廣告檔案請於
            <Box paddingX={1}>
              <Controller
                name="adDeadline"
                control={control}
                render={(({ field }) => (
                  <DesktopDatePicker
                    label="廣告死限"
                    inputFormat="yyyy-MM-dd"
                    mask="____-__-__"
                    renderInput={(params) => <TextField size="small" {...params} />}
                    {...field}
                  />
                ))}
              />
            </Box>
            前提供，廣告規格如下：
          </Box>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩種（請詳見附件參考圖）</li>
            <li>請提供 .png/ .ai 檔案，ai 檔的圖片請 “內嵌”、文字請一定要“建立外框”。</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
          </ol>
        </li>
        <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
        <li>於 COSCUP 官方部落格露出一篇文章。可以撰寫技術分享，或是人才招募、活動宣傳等，抑或者有想分享之內容皆可。繳交的檔案要請您至這個頁面撰寫： <a href="https://hackmd.io">https://hackmd.io</a>
。編輯後，下載純 HTML 檔案給我們以便上稿。</li>
      </ol>
    )
  }

  if (level?.value === '青銅級') {
    return (
      <ol>
        <li>Logo 於 {TITLE} 官方網站露出及公司介紹。Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。</li>
        <li>活動會場報到區歡迎背板上 Logo 露出。</li>
        <li>COSCUP 官方社群網站推廣乙方贊助事宜。</li>
        <li>
          <Box display="flex" alignItems="center">
            網站議程頁面廣告（依照贊助等級比重播出），網頁廣告檔案請於
            <Box paddingX={1}>
              <Controller
                name="adDeadline"
                control={control}
                render={(({ field }) => (
                  <DesktopDatePicker
                    label="廣告死限"
                    inputFormat="yyyy-MM-dd"
                    mask="____-__-__"
                    renderInput={(params) => <TextField size="small" {...params} />}
                    {...field}
                  />
                ))}
              />
            </Box>
            前提供，廣告規格如下：
          </Box>
          <ol>
            <li>網頁廣告尺寸：200W x 800L(px),  1440W x 400L (px)  兩種（請詳見附件參考圖）</li>
            <li>請提供 .png/ .ai 檔案，ai 檔的圖片請 “內嵌”、文字請一定要“建立外框”。</li>
            <li>圖片解析度解析度請設定在 72 dpi。</li>
            <li>色彩請用一般 RGB 色彩系統即可。</li>
          </ol>
        </li>
        <li>為了呈現最好的視覺廣告效益，請給我們的圖檔要有符合上面所有的格式。</li>
      </ol>
    )
  }

  if (level?.value === '好朋友級') {
    return (
      <ol>
        <li>Logo 於 {TITLE} 官方網站露出及公司介紹。Logo 順序除了依照贊助等級及入款時間順序排列外，並於確認收到款項後執行。</li>
        <li>活動會場報到區歡迎背板上 Logo 露出。</li>
        <li>COSCUP 官方社群網站推廣乙方贊助事宜。</li>
      </ol>
    )
  }

  return (<div></div>)
}

export default React.memo(BenefitField)