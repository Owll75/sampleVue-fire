<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script setup>
//imports
import{ref, onMounted} from 'vue'
import { collection, getDocs, onSnapshot, addDoc, deleteDoc,doc  } from "firebase/firestore"
import{db} from '@/firebase'
const items=ref([])
//firebase refs
  const DataCollection=collection(db, 'Items')     //collection(db,'your cllection name')
  //get items
  onMounted(() =>{
      onSnapshot(DataCollection, (querySnapshot) => {
      let FbItemsList = []
      querySnapshot.forEach((doc) => {
        const item ={
        id: doc.id,
        name:doc.data().name,
        type:doc.data().type,
        count:doc.data().count
      }
        FbItemsList.push(item)
        console.log(item)
      })
      items.value=FbItemsList
    })
  })
</script>