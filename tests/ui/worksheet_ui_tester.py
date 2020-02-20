from selenium import webdriver
from ui_tester import UITester


class WorksheetUITester(UITester):
    def __init__(self, driver, base_url, password):
        super().__init__('worksheet', driver, base_url, password)

    def run(self):
        self.login()
        self.wait_until_worksheet_loads()
        self.click_link('Small Worksheet [cl_small_worksheet]')
        self.switch_to_new_tab()
        self.wait_until_worksheet_loads()
        self.output_images('worksheet_container')
        self.compare_to_baselines()


# TEST
if __name__ == '__main__':
    '''
    driver = webdriver.Chrome()
    worksheet_tester = WorksheetUITester(driver, 'http://localhost', 'codalab')
    worksheet_tester.run()
    '''

    # ff_profile_dir = "/usr/local/selenium/webdriver/firefox"
    # ff_profile = webdriver.FirefoxProfile(profile_directory=ff_profile_dir)
    driver = webdriver.Firefox(log_path="")
    # worksheet_tester = WorksheetUITester(
    #     driver, 'https://worksheets-dev.codalab.org', 'codalab'
    # )
    worksheet_tester = WorksheetUITester(driver, 'http://localhost', 'codalab')
    worksheet_tester.run()
