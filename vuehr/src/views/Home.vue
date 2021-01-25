<template>
  <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">{{ $t("home.hrm") }}</div>
        <div>
          <el-button icon="el-icon-bell" size="normal" style="margin-right: 8px;color: #000000;" type="text"
                     @click="goChat"></el-button>
          <el-dropdown class="userInfo" @command="commandHandler">
  <span class="el-dropdown-link">
    {{ user.name }}<i><img :src="user.userface" alt=""></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userinfo">{{ $t("home.userInfo") }}</el-dropdown-item>
              <el-dropdown-item command="setting">{{ $t("home.setting") }}</el-dropdown-item>
              <el-dropdown-item command="logout" divided>{{ $t("home.logout") }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened>
            <el-submenu v-for="(item,index) in routes" v-if="!item.hidden" :key="index" :index="index+''">
              <template slot="title">
                <i :class="item.iconCls" style="color: #409eff;margin-right: 5px"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item v-for="(child,indexj) in item.children" :key="indexj" :index="child.path">
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb v-if="this.$router.currentRoute.path!='/home'" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">{{ $t("home.home") }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$router.currentRoute.name }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div v-if="this.$router.currentRoute.path=='/home'" class="homeWelcome">
            {{ $t("home.homeWelcome") }}
          </div>
          <router-view class="homeRouterView"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "Home",
  data() {
    return {
      // user: JSON.parse(window.sessionStorage.getItem("user"))
    }
  },
  computed: {
    routes() {
      return this.$store.state.routes;
    },
    user() {
      return this.$store.state.currentHr;
    }
  },
  methods: {
    goChat() {
      this.$router.push("/chat");
    },
    commandHandler(cmd) {
      if (cmd === 'logout') {
        this.$confirm(i18n.t('home.doYouWantLogout'), i18n.t('titleCommon.alert'), {
          cancelButtonText: i18n.t('buttonCommon.cancel'),
          confirmButtonText: i18n.t('buttonCommon.confirm'),
          type: 'warning'
        }).then(() => {
          this.getRequest("/logout");
          window.sessionStorage.removeItem("user")
          this.$store.commit('initRoutes', []);
          this.$router.replace("/");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: i18n.t('home.operationCancelled')
          });
        });
      } else if (cmd === 'userinfo') {
        this.$router.push('/hrinfo');
      }
    }
  }
}
</script>

<style>
.homeRouterView {
  margin-top: 10px;
}

.homeWelcome {
  text-align: center;
  font-size: 30px;
  font-family: 华文行楷;
  color: #409eff;
  padding-top: 50px;
}

.homeHeader {
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 30px;
  font-family: 华文行楷;
  color: #ffffff
}

.homeHeader .userInfo {
  cursor: pointer;
}

.el-dropdown-link img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 8px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>

