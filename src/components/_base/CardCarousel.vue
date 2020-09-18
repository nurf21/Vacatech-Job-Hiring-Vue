<template>
  <b-container>
    <b-card-group deck>
      <b-card
        v-for="(item, index) in currentPageClubs"
        :key="index"
        class="card-container text-center"
      >
        <b-img
          fluid
          rounded="circle"
          :src="url + '/' + item.user_img"
          alt="user_image"
          style="width: 140px; height: 140px; border: 10px solid rgba(251, 176, 23, 0.37);"
        ></b-img>
        <h4 class="card-title">{{ item.user_name }}</h4>
        <p class="card-role">{{ item.user_role }}</p>
        <p class="card-comment">{{ item.user_comment }}</p>
      </b-card>
    </b-card-group>

    <div class="card-pagination">
      <div
        class="page-index"
        v-for="i in nbPages"
        :key="i"
        @click="goto(i)"
        :class="{ active: currentPage(i) }"
      ></div>
    </div>
  </b-container>
</template>

<style scoped>
.card-container {
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);
  border: transparent;
}

.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.page-index {
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #5e50a1;
  box-shadow: 0px 8px 16px rgba(204, 204, 204, 0.75);
}
.active {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}

.card-title {
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 3.5rem;
  color: #1f2a36;
}

.card-role {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #9ea0a5;
}

.card-comment {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #46505c;
}
</style>

<script>
export default {
  data() {
    return {
      paginated: [],
      nbPages: 0,
      perPage: 3,
      currentPageIndex: 0,
      url: process.env.VUE_APP_BASE_URL,
      users: [
        {
          user_id: 1,
          user_name: 'Harry Styles',
          user_role: 'Web Developer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          user_img: 'cat1.jpg'
        },
        {
          user_id: 2,
          user_name: 'Louis Tomlinson',
          user_role: 'Web Developer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat2.jpg'
        },
        {
          user_id: 3,
          user_name: 'Liam Payne',
          user_role: 'Mobile Developer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat3.jpg'
        },
        {
          user_id: 4,
          user_name: 'Zayn Malik',
          user_role: 'Fullstack Developer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat4.jpg'
        },
        {
          user_id: 5,
          user_name: 'Niall Horan',
          user_role: 'QA Engineer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat5.jpg'
        },
        {
          user_id: 6,
          user_name: 'Niall and The Potato',
          user_role: 'UX Researcher',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat6.jpg'
        },
        {
          user_id: 7,
          user_name: 'Kevin The Pigeon',
          user_role: 'Project Manager',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat7.jpg'
        },
        {
          user_id: 8,
          user_name: 'Larry Stylinson',
          user_role: 'UI/UX Designer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat8.jpg'
        },
        {
          user_id: 9,
          user_name: 'One Addition',
          user_role: 'Data Engineer',
          user_comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
          user_img: 'cat9.jpg'
        }
      ]
    }
  },
  computed: {
    formattedClubs() {
      return this.users.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([])
        c[c.length - 1].push(n)
        return c
      }, [])
    },
    currentPageClubs() {
      this.createPages()

      return this.paginated[this.currentPageIndex]
    }
  },
  methods: {
    currentPage(i) {
      return i - 1 === this.currentPageIndex
    },
    createPages() {
      const lengthAll = Object.keys(this.users).length
      this.nbPages = 0
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated[this.nbPages] = this.users.slice(i, i + this.perPage)
        this.nbPages++
      }
    },
    goto(i) {
      this.currentPageIndex = i - 1
    }
  }
}
</script>
