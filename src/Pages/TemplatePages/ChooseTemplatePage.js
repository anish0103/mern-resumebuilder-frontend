import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './ChooseTemplatePage.css'
import Loading from '../Loading/Loading'
import Template1 from './TemplateImages/Template1.jpg'
import Template2 from './TemplateImages/Template2.jpg'
import { chooseTemplate } from '../../store/action/action'

const ChooseTemplatePage = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const UserData = useSelector(state => state.userData)

  const ChooseTempateHandler = async data => {
    try {
      setLoading(true)
      await dispatch(chooseTemplate({ id: UserData._id, name: data }))
      setLoading(false)
      toast.success("Your template is updated!!")
    } catch (error) {
      console.log(error)
    }
  }

  const ContainerVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
        }
    }
}
const ElementVariant = {
    hidden: {
        x: -40,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50
        }
    }
}
const SubElementVariant = {
    hidden: {
        y: -50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50
        }
    }
}

  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='choosetemplatepage-maincontainer'>
        <div className='choosetemplatepage-container'>
          <motion.div variants={ElementVariant} className='choosetemplatepage-titlecontainer'>
            <p>Choose your template</p>
          </motion.div>
          <motion.div variants={ContainerVariant} className='choosetemplatepage-templatescontainer'>
            <motion.div variants={SubElementVariant} onClick={() => ChooseTempateHandler("Template1")} className='choosetemplatepage-template'>
              <div className='choosetemplatepage-chooseeffectcontainer'><p>Choose this template</p></div>
              <img className='choosetemplatepage-image' src={Template1} alt="Template 1" />
            </motion.div>
            <motion.div variants={SubElementVariant} onClick={() => ChooseTempateHandler("Template2")} className='choosetemplatepage-template'>
              <div className='choosetemplatepage-chooseeffectcontainer'><p>Choose this template</p></div>
              <img className='choosetemplatepage-image' src={Template2} alt="Template 2" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default ChooseTemplatePage