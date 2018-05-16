
const {app,BrowserWindow,Menu}=require('electron')
const url=require('url')
const path=require('path')

let win;

function crtWindow(){

  win=new BrowserWindow({
    width:800,
    height:600
  })

  win.loadURL(url.format({
    pathname:path.join(__dirname,'index.html'),
    protocol:'file:',
    slashes:true
  }))
}

const template=[
  {
    label:'sanalrakam',
    submenu:[
      {
        role:'minimize'
      },
      {
        role:'redo'
      },
      {
        type:'separator'
      },
      {
        role:'cut'
      },
      {
        role:'copy'
      },
      {
        role:'paste'
      }
    ]
  },
  {
    role:'help',
    submenu:[
      {
        label:'for help'
      }
    ]
  }
]

const menu=Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)



app.on('ready',crtWindow)
