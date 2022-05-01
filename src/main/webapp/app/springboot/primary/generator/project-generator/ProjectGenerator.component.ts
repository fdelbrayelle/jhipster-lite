import { defineComponent, inject } from 'vue';
import { ProjectToUpdate, toProject } from '@/springboot/primary/ProjectToUpdate';
import { Logger } from '@/common/domain/Logger';
import { ProjectService } from '@/springboot/domain/ProjectService';
import { FileDownloader } from '@/common/primary/FileDownloader';
import { GeneratorButtonVue } from '@/springboot/primary/generator/generator-button';

export default defineComponent({
  name: 'ProjectGeneratorComponent',

  components: {
    GeneratorButtonVue,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
    buildTool: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const logger = inject('logger') as Logger;
    const projectService = inject('projectService') as ProjectService;
    const fileDownloader = inject('fileDownloader') as FileDownloader;

    const selectorPrefix = 'project-generator';

    const initProject = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .init(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Project initialization failed', error.message));
      }
    };

    const addMaven = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addMaven(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding Maven to project failed', error));
      }
    };

    const addJaCoCo = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addJaCoCo(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding JaCoCo to project failed', error));
      }
    };

    const addSonarBackend = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addSonarBackend(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding Sonar Backend to project failed', error));
      }
    };

    const addSonarBackendFrontend = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addSonarBackendFrontend(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding Sonar Backend+Frontend to project failed', error));
      }
    };

    const addJavaBase = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addJavaBase(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding Java Base to project failed', error));
      }
    };

    const addFrontendMavenPlugin = async (): Promise<void> => {
      if (props.project.folder !== '') {
        await projectService
          .addFrontendMavenPlugin(toProject(props.project as ProjectToUpdate))
          .catch(error => logger.error('Adding Frontend Maven Plugin to project failed', error));
      }
    };

    const download = async (): Promise<void> => {
      await projectService
        .download(toProject(props.project as ProjectToUpdate))
        .then(file => {
          fileDownloader.download(file);
        })
        .catch(error => logger.error('Downloading project failed', error));
    };

    return {
      selectorPrefix,
      props,
      initProject,
      addMaven,
      addJaCoCo,
      addSonarBackend,
      addSonarBackendFrontend,
      addJavaBase,
      addFrontendMavenPlugin,
      download,
    };
  },
});